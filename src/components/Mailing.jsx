import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline';

const Mailing = () => {
  return (
    <div className="relative flex items-center justify-center isolate overflow-hidden bg-gray-900 h-screen" style={{backgroundImage: "url(./beruang.png)", backgroundPosition: 'center', filter: 'brightness(65%)'}}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl text-center">Stay in Touch with Our Mailing List.</h2>
            <p className="mt-4 text-xl leading-8 text-gray-300 text-center">
              Want to Know Upcoming Events?
            </p>
            <div className="mt-8 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 text-lg leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-indigo-500 px-4 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Subscribe
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2 text-lg">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-3 ring-1 ring-white/10">
                <CalendarDaysIcon className="h-8 w-8 text-white" aria-hidden="true" />
              </div>
              <dt className="mt-6 font-semibold text-white">Weekly articles</dt>
              <dd className="mt-2 leading-7 text-white">
                Weekly articles tentang Pot Fotografi Terbaik di Balikpapan, Kuliner Khas Balikpapan, Wisata Sejarah dan Budaya, Agenda Acara Lokal dan lainnya.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-3 ring-1 ring-white/10">
                <HandRaisedIcon className="h-8 w-8 text-white" aria-hidden="true" />
              </div>
              <dt className="mt-6 font-semibold text-white">No spam</dt>
              <dd className="mt-2 leading-7 text-white">
                Pembatasan terhadap frekuensi pengiriman pesan dilakukan agar tidak menggangu jalannya aktivitas website.
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  );
}

export default Mailing;
