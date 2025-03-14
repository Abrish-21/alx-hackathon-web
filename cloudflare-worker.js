export default {
  async fetch(request, env) {
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Accept',
      'Access-Control-Max-Age': '86400',
    };

    // Handle CORS preflight requests
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: corsHeaders
      });
    }

    try {
      const url = new URL(request.url);
      const path = url.pathname;

      if (path === '/') {
        return new Response(JSON.stringify({ status: 'ok' }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }

      if (path === '/api/register' && request.method === 'POST') {
        const data = await request.json();
        const ticketNumber = 'ALX-' + Date.now().toString(36).toUpperCase();

        // Check for existing email
        const existingUser = await env.DB.prepare(
          'SELECT email FROM users WHERE email = ?'
        ).bind(data.email).first();

        if (existingUser) {
          return new Response(
            JSON.stringify({ error: 'Email already registered' }),
            {
              status: 400,
              headers: { ...corsHeaders, 'Content-Type': 'application/json' }
            }
          );
        }

        // Generate QR code data
        const qrData = JSON.stringify({
          ticketNumber,
          email: data.email,
          name: data.fullName
        });

        // Create email HTML with QR code
        const emailHtml = `
          <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6;">
              <h2>Welcome to ALX Hackathon!</h2>
              <p>Dear ${data.fullName},</p>
              <p>Thank you for registering for the ALX Hackathon. Here's your ticket information:</p>
              <p><strong>Ticket Number:</strong> ${ticketNumber}</p>
              <p><strong>Role:</strong> ${data.roleType}</p>
              ${data.teamName ? `<p><strong>Team:</strong> ${data.teamName}</p>` : ''}
              <div style="margin: 20px 0;">
                <p>Your QR Code for Check-in:</p>
                <img src="https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrData)}&size=200x200" alt="Check-in QR Code" style="width: 200px; height: 200px;"/>
              </div>
              <p>Please keep this QR code handy for check-in at the event.</p>
              <p>Best regards,<br>ALX Hackathon Team</p>
            </body>
          </html>
        `;

        // Send email using Mailchannels
        const emailResponse = await fetch('https://api.mailchannels.net/tx/v1/send', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({
            personalizations: [
              {
                to: [{ email: data.email, name: data.fullName }],
              },
            ],
            from: {
              email: 'noreply@alxhackathon.com',
              name: 'ALX Hackathon',
            },
            subject: 'ALX Hackathon Registration Confirmation',
            content: [
              {
                type: 'text/html',
                value: emailHtml,
              },
            ],
          }),
        });

        if (!emailResponse.ok) {
          console.error('Failed to send email:', await emailResponse.text());
        }

        // Insert user into database
        await env.DB.prepare(`
          INSERT INTO users (
            fullName, email, phoneNumber, alxAffiliation,
            registrationType, teamName, strengths, roleType,
            ticketNumber
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(
          data.fullName,
          data.email,
          data.phoneNumber,
          data.alxAffiliation,
          data.registrationType,
          data.teamName || null,
          data.strengths,
          data.roleType,
          ticketNumber
        ).run();

        // Get the inserted user's ID
        const { id: userId } = await env.DB.prepare(
          'SELECT id FROM users WHERE ticketNumber = ?'
        ).bind(ticketNumber).first();

        // Handle team members
        if (data.registrationType === 'team' && Array.isArray(data.teamMembers)) {
          for (const member of data.teamMembers) {
            if (member.email && member.fullName) {
              const memberTicket = 'ALX-' + Date.now().toString(36).toUpperCase();
              
              // Generate QR code data for team member
              const memberQrData = JSON.stringify({
                ticketNumber: memberTicket,
                email: member.email,
                name: member.fullName
              });

              // Create email HTML for team member
              const memberEmailHtml = `
                <html>
                  <body style="font-family: Arial, sans-serif; line-height: 1.6;">
                    <h2>Welcome to ALX Hackathon!</h2>
                    <p>Dear ${member.fullName},</p>
                    <p>You have been registered as a team member for the ALX Hackathon.</p>
                    <p><strong>Team:</strong> ${data.teamName}</p>
                    <p><strong>Ticket Number:</strong> ${memberTicket}</p>
                    <p><strong>Role:</strong> ${member.roleType}</p>
                    <div style="margin: 20px 0;">
                      <p>Your QR Code for Check-in:</p>
                      <img src="https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(memberQrData)}&size=200x200" alt="Check-in QR Code" style="width: 200px; height: 200px;"/>
                    </div>
                    <p>Please keep this QR code handy for check-in at the event.</p>
                    <p>Best regards,<br>ALX Hackathon Team</p>
                  </body>
                </html>
              `;

              // Send email to team member using Mailchannels
              const memberEmailResponse = await fetch('https://api.mailchannels.net/tx/v1/send', {
                method: 'POST',
                headers: {
                  'content-type': 'application/json',
                },
                body: JSON.stringify({
                  personalizations: [
                    {
                      to: [{ email: member.email, name: member.fullName }],
                    },
                  ],
                  from: {
                    email: 'noreply@alxhackathon.com',
                    name: 'ALX Hackathon',
                  },
                  subject: 'ALX Hackathon Team Registration Confirmation',
                  content: [
                    {
                      type: 'text/html',
                      value: memberEmailHtml,
                    },
                  ],
                }),
              });

              if (!memberEmailResponse.ok) {
                console.error('Failed to send team member email:', await memberEmailResponse.text());
              }

              // Insert team member into database
              await env.DB.prepare(`
                INSERT INTO team_members (
                  userId, fullName, email, phoneNumber,
                  roleType, ticketNumber
                ) VALUES (?, ?, ?, ?, ?, ?)
              `).bind(
                userId,
                member.fullName,
                member.email,
                member.phoneNumber || '',
                member.roleType,
                memberTicket
              ).run();
            }
          }
        }

        return new Response(
          JSON.stringify({ 
            message: 'Registration successful',
            ticketNumber 
          }),
          {
            status: 201,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          }
        );
      }

      if (path === '/api/contact' && request.method === 'POST') {
        try {
          const data = await request.json();
          console.log('Contact form data:', data);

          // Validate required fields
          if (!data.name || !data.email || !data.subject || !data.message) {
            return new Response(
              JSON.stringify({ error: 'All fields are required' }),
              {
                status: 400,
                headers: { ...corsHeaders, 'Content-Type': 'application/json' }
              }
            );
          }

          // Store contact message in database
          try {
            await env.DB.prepare(`
              INSERT INTO contact_messages (
                name, email, subject, message, created_at
              ) VALUES (?, ?, ?, ?, datetime('now'))
            `).bind(
              data.name,
              data.email,
              data.subject,
              data.message
            ).run();

            return new Response(
              JSON.stringify({ message: 'Message sent successfully' }),
              {
                status: 200,
                headers: { ...corsHeaders, 'Content-Type': 'application/json' }
              }
            );
          } catch (dbError) {
            console.error('Database error:', dbError);
            return new Response(
              JSON.stringify({ error: 'Failed to save message' }),
              {
                status: 500,
                headers: { ...corsHeaders, 'Content-Type': 'application/json' }
              }
            );
          }
        } catch (error) {
          console.error('Contact form error:', error);
          return new Response(
            JSON.stringify({ error: 'Failed to process request' }),
            {
              status: 400,
              headers: { ...corsHeaders, 'Content-Type': 'application/json' }
            }
          );
        }
      }

      if (path.startsWith('/api/registration/')) {
        const ticketNumber = path.split('/').pop();
        const user = await env.DB.prepare(`
          SELECT u.*, GROUP_CONCAT(
            json_object(
              'fullName', tm.fullName,
              'email', tm.email,
              'phoneNumber', tm.phoneNumber,
              'roleType', tm.roleType,
              'ticketNumber', tm.ticketNumber
            )
          ) as teamMembers
          FROM users u
          LEFT JOIN team_members tm ON u.id = tm.userId
          WHERE u.ticketNumber = ?
          GROUP BY u.id
        `).bind(ticketNumber).first();

        if (!user) {
          return new Response(
            JSON.stringify({ error: 'Registration not found' }),
            {
              status: 404,
              headers: { ...corsHeaders, 'Content-Type': 'application/json' }
            }
          );
        }

        // Parse team members if present
        if (user.teamMembers) {
          try {
            user.teamMembers = JSON.parse(`[${user.teamMembers}]`);
          } catch (e) {
            user.teamMembers = [];
          }
        } else {
          user.teamMembers = [];
        }

        return new Response(
          JSON.stringify(user),
          {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          }
        );
      }

      if (path.startsWith('/api/checkin/')) {
        const ticketNumber = path.split('/').pop();
        
        // Check if already checked in
        const user = await env.DB.prepare(`
          SELECT checkInStatus, checkInTime FROM users WHERE ticketNumber = ?
          UNION ALL
          SELECT checkInStatus, checkInTime FROM team_members WHERE ticketNumber = ?
        `).bind(ticketNumber, ticketNumber).first();

        if (!user) {
          return new Response(
            JSON.stringify({ error: 'Invalid ticket' }),
            {
              status: 404,
              headers: { ...corsHeaders, 'Content-Type': 'application/json' }
            }
          );
        }

        if (user.checkInStatus) {
          return new Response(
            JSON.stringify({ 
              error: 'Already checked in',
              checkInTime: user.checkInTime
            }),
            {
              status: 400,
              headers: { ...corsHeaders, 'Content-Type': 'application/json' }
            }
          );
        }

        // Perform check-in
        const now = new Date().toISOString();
        await env.DB.prepare(`
          UPDATE users 
          SET checkInStatus = 1, checkInTime = ? 
          WHERE ticketNumber = ?
        `).bind(now, ticketNumber).run();

        await env.DB.prepare(`
          UPDATE team_members 
          SET checkInStatus = 1, checkInTime = ? 
          WHERE ticketNumber = ?
        `).bind(now, ticketNumber).run();

        return new Response(
          JSON.stringify({ 
            message: 'Check-in successful',
            checkInTime: now
          }),
          {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          }
        );
      }

      return new Response(
        JSON.stringify({ error: 'Not Found' }),
        {
          status: 404,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );

    } catch (error) {
      console.error('Error:', error);
      return new Response(
        JSON.stringify({ error: 'Internal server error' }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }
  }
};
