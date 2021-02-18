import { signIn, signOut, useSession } from "next-auth/client";
import React, { FC, FormEvent, useState } from "react";
import { Dropdown } from "./Dropdown";

type Props = {};

export const NavbarAccount: FC<Props> = (props) => {
  const [email, setEmail] = useState("");
  const [session, loading] = useSession();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
    await signIn("email", { email });
  };

  return (
    <>
      {!session && (
        <div className="wrapper">
          <Dropdown target={<button className="NavbarAccount">Sign in</button>}>
            <form className="form" onSubmit={handleSubmit}>
              <div className="title">Sign in / Sign up</div>
              <div className="form-field">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  id="email"
                  className="form-input"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button type="submit" className="form-button">
                Send magic link
              </button>
            </form>
          </Dropdown>
        </div>
      )}

      {session && (
        <button className="NavbarAccount" onClick={() => signOut()}>
          Sign out
        </button>
      )}

      <style jsx>{`
        .wrapper {
          display: none;
        }

        :global(.md) .wrapper {
          display: block;
        }

        .NavbarAccount {
          color: var(--gray-500);
          font-weight: var(--font-weight-semibold);
        }

        .NavbarAccount > :global(* + *) {
          margin-top: var(--size-04);
        }

        .NavbarAccount:hover {
          color: var(--gray-800);
        }

        .title {
          font-size: var(--font-size-0);
          text-transform: uppercase;
          letter-spacing: var(--letter-spacing-5);
          font-weight: var(--font-weight-bold);
          color: var(--gray-400);
        }

        .form {
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .form > :global(* + *) {
          margin-top: var(--size-04);
        }

        .form-field {
        }

        .form-field > :global(* + *) {
          margin-top: var(--size-03);
        }

        .form-label {
          color: var(--gray-600);
          font-size: var(--font-size-1);
          font-weight: var(--font-weight-bold);
        }

        .form-input {
          padding: var(--size-03) var(--size-05);
          box-shadow: var(--box-shadow-2);
          border-radius: var(--border-radius-3);
          width: 80vw;
          max-width: var(--size-13);
        }

        .form-button {
          padding: var(--size-03) var(--size-05);
          background: var(--yellow-300);
          font-weight: var(--font-weight-bold);
          border-radius: var(--border-radius-3);
        }

        .form-button:hover {
          background: var(--yellow-400);
        }
      `}</style>
    </>
  );
};
