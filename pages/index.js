import { useForm } from 'react-hook-form';
import { useState } from 'react';

const Loading = (props) => (
  <svg
    viewBox="0 0 38 38"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <g transform="translate(1 1)" strokeWidth="2">
        <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
        <path d="M36 18c0-9.94-8.06-18-18-18">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 18 18"
            to="360 18 18"
            dur="1s"
            repeatCount="indefinite"
          />
        </path>
      </g>
    </g>
  </svg>
);

const HomePage = () => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const response = await fetch('https://submit-form.com/kVXf1w8Y', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      });

      console.log(response);
      setSent(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <header className="flex h-32 bg-white items-center shadow-md sticky top-0 w-full z-10">
        <div className="w-32 h-full p-6">
          <img src="./idea.png" alt="" className="h-full" />
        </div>

        <h1 className="font-bold flex items-center flex-1 space-x-4 text-gray-400">
          <span className="text-primary-default text-2xl">INQBATE</span>
          <span>real end to end solution for startups</span>
        </h1>
      </header>

      <div className="container mx-auto space-y-6 prose md:prose-lg">
        <section>
          <blockquote>
            It always seems impossible until it’s done. ~ Nelson Mandela
          </blockquote>
        </section>

        <section>
          <h2 className="font-bold text-2xl">
            You don’t even dream (yet) to be the next unicorn
          </h2>

          <p>
            But still you have an idea with a global impact, no funding, and no
            expert top team to assist?
          </p>
        </section>

        <section>
          <h2 className="font-bold text-2xl">
            From pre-seed to second round and successful company
          </h2>

          <p>We are one-stop-shop support-offer you all what you will need!</p>

          <ul>
            <li>We fully support you 100% "Hands On"</li>
            <li>Everything you need from idea to MVP</li>
            <li>Including pre-seed / seed funding full grant</li>
            <li>Up to 15% equity Vs 30%-50% taken by others</li>
            <li>You control your start-up, no veto rights requested</li>
            <li>
              Done it for ourselves from idea to exit -for 28 years and 15
              startups
            </li>
            <li>We assist in funding</li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold text-2xl">Do you have an Impact idea?</h2>

          {(sent && (
            <p>
              We are so exited you want to share with us your idea. We will
              contact you soon!
            </p>
          )) || (
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex items-center space-x-2">
                <label htmlFor="email">Contact us today:</label>

                <div className="flex flex-1 items-stretch space-x-2">
                  <input
                    id="email"
                    type="email"
                    placeholder="Type your email"
                    className="border-primary-default rounded-md flex-1"
                    {...register('email', { required: 'Email is required' })}
                    disabled={loading}
                  />
                  <button
                    disabled={loading}
                    className="flex items-center bg-primary-light text-primary-dark hover:text-primary-light hover:bg-primary-dark font-bold rounded-md px-6 py-2"
                  >
                    {loading && <Loading className="w-6 pr-1" />}
                    Send
                  </button>
                </div>
              </div>

              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </form>
          )}
        </section>

        <section>
          <h2 className="font-bold text-2xl">Meet the founders</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article className="flex flex-col items-center">
              <img
                src="./ophir.fromm.jpeg"
                alt=""
                className="h-40 w-40 object-center rounded-full"
              />

              <a
                href="https://www.linkedin.com/in/ophirfromm/"
                className="flex items-center space-x-2"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 fill-current"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>

                <span>LinkedIn Profile</span>
              </a>

              <h3>Ophir Fromm - CEO</h3>

              <p>
                27 years in the Hi-tech and Low-tech business. Until now he
                opened several start-ups both in Hi-tech and Low-tech fields.
                Hi-tech and Low-tech. The last one at: 2012 was focused on
                increasing efficiency of solar panels for electric and water
                heating systems. His innovation was the ability to increase the
                efficiency by 50%-75% getting more electricity and warm water
                also in the winter.
              </p>
            </article>

            <article className="flex flex-col items-center">
              <img
                src="./alon.valadji.jpg"
                alt=""
                className="h-40 w-40 object-center rounded-full"
              />

              <a
                href="https://www.linkedin.com/in/alonronin/"
                className="flex items-center space-x-2"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 fill-current"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span>LinkedIn Profile</span>
              </a>

              <h3>Alon Valadji - CTO</h3>

              <p>
                Is a leading software architect well-versed in Rozansky and
                Woods’ architectural methodologies. As a full-cycle JavaScript
                and web architecture torchbearer. His main goal in life is to
                make developers happy!
              </p>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
