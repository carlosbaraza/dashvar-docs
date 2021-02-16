import React, { FC } from "react";

type Props = {};

export const MailchimpHorizontal: FC<Props> = (props) => {
  return (
    <>
      <div className="MailchimpHorizontal">
        <div
          dangerouslySetInnerHTML={{
            __html: `<!-- Begin Mailchimp Signup Form -->
<div id="mc_embed_signup">
<form action="https://dashvar.us1.list-manage.com/subscribe/post?u=c4e687fec7fa45f21934a7800&amp;id=6458cb559b" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
	<label for="mce-EMAIL">Get our Rapid UI Development tips. <br>No spam.</label>
	<input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_c4e687fec7fa45f21934a7800_6458cb559b" tabindex="-1" value=""></div>
    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
    </div>
</form>
</div>

<!--End mc_embed_signup-->`,
          }}
        />
      </div>

      <style jsx>{`
        .MailchimpHorizontal {
          display: flex;
          width: 100%;
        }
      `}</style>

      <style jsx global>{`
        #mc_embed_signup form {
          text-align: left;
        }

        .mc-field-group {
          display: inline-block;
        } /* positions input field horizontally */

        #mc_embed_signup input.email {
          font-size: var(--font-size-5);
          border-radius: var(--border-radius-4);
          color: var(--gray-600);
          box-shadow: var(--box-shadow-4);
          background-color: var(--white);
          box-sizing: border-box;
          height: var(--size-09);
          padding: 0px var(--size-06);
          display: inline-block;
          width: var(--size-14);
          vertical-align: top;
          margin: 0 var(--size-05) 0 0;
        }

        #mc_embed_signup input.email:focus {
          outline: var(--outline-black);
          outline-offset: var(--outline-offset-1);
        }

        #mc_embed_signup label {
          display: block;
          font-size: var(--font-size-9);
          line-height: var(--line-height-9);
          padding-bottom: var(--size-07);
          font-weight: var(--font-weight-bold);
        }

        #mc_embed_signup .clear {
          display: inline-block;
        } /* positions button horizontally in line with input */

        #mc_embed_signup .button {
          font-size: var(--font-size-5);
          border: none;
          border-radius: var(--border-radius-4);
          color: var(--black);
          font-weight: var(--font-weight-bold);
          background-color: var(--yellow-300);
          box-sizing: border-box;
          height: var(--size-09);
          padding: 0 var(--size-07);
          display: inline-block;
          margin: 0;
          transition: var(--transition-all);
          box-shadow: var(--box-shadow-4);
        }

        #mc_embed_signup .button:hover {
          background-color: var(--yellow-400);
          cursor: pointer;
        }

        #mc_embed_signup div#mce-responses {
          float: left;
          top: -1.4em;
          padding: 0em 0.5em 0em 0.5em;
          overflow: hidden;
          width: 90%;
          margin: 0 5%;
          clear: both;
        }

        #mc_embed_signup div.response {
          margin: 1em 0;
          padding: 1em 0.5em 0.5em 0;
          font-weight: bold;
          float: left;
          top: -1.5em;
          z-index: 1;
          width: 80%;
        }

        #mc_embed_signup #mce-error-response {
          display: none;
        }

        #mc_embed_signup #mce-success-response {
          color: var(--green-600);
          display: none;
        }

        #mc_embed_signup label.error {
          display: block;
          float: none;
          width: auto;
          margin-left: 1.05em;
          text-align: left;
          padding: 0.5em 0;
        }

        @media (max-width: 768px) {
          #mc_embed_signup label {
            font-size: var(--font-size-8);
            line-height: var(--line-height-8);
            hyphens: auto;
          }

          #mc_embed_signup input.email {
            width: 100%;
            margin: 0 0 var(--size-05) 0;
          }
          #mc_embed_signup .clear {
            display: block;
            width: 100%;
          }
          #mc_embed_signup .button {
            width: 100%;
            margin: 0;
          }
        }
      `}</style>
    </>
  );
};
