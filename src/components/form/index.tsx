export default function Form() {
  return (
    <>
      <div className=" px-4 sm:mt-0  lg:px-8">
        {/* contact our team  */}
        <div className=" ">
          <div className="mt-5 rounded pt-10 shadow md:col-span-2 md:mt-0">
            <div className="mb-8 flex flex-col pl-2 ">
              <p className=" mb-0 mt-0  text-left text-4xl font-light text-[#5e1fff] ">
                Drop us a line
              </p>
            </div>
            <form action="#" method="POST">
              <div className=" overflow-hidden ">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="mb-1  block text-sm font-normal uppercase  text-[#989ba2] "
                      >
                        First name:
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        placeholder="John"
                        autoComplete="given-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="mb-1  block text-sm font-normal uppercase  text-[#989ba2] "
                      >
                        Last name:
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        placeholder="Doe"
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 ">
                      <label
                        htmlFor="email-address"
                        className="mb-1  block text-sm font-normal uppercase  text-[#989ba2] "
                      >
                        Email:
                      </label>
                      <input
                        type="email"
                        required
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="street-address"
                        className="mb-1 block text-sm font-normal uppercase  text-[#989ba2] "
                      >
                        Message:
                      </label>
                      <textarea
                        type="email"
                        name="text"
                        id="text"
                        autoComplete="text"
                        className="mt-1 block  h-32 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
                <div className="items-center justify-center bg-gray-50 px-4 py-3 text-center sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex w-96  justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    SEND EMAIL
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
    </>
  )
}
