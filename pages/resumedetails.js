import React,{ useState } from "react";

const resumedetails = () => {
    const [resume, setResume] = useState(false);
  return (
    <div className="flex">
      <div
        className={` lg:bg-white lg:relative lg:start-0 lg:w-1/2 lg:bottom-0 lg:ps-7 lg:pe-5 lg:mt-[65.6px] px-5 pb-10 lg:overflow-y-auto bg-white`}
        style={{ marginTop: "49.6px" }}
      >
    
        <div className="mx-auto max-w-2xl">
          <div>
            <div className="w-full border-b border-gray-200">
              <div className="flex items-stretch w-full">
                <div className="flex-grow flex py-3 pe-6 text-start overflow-hidden rounded">
                  <div className="relative flex items-center font-bold overflow-hidden text-xl text-gray-800">
                    <span className="absolute h-0 block overflow-hidden whitespace-pre">
                      Personal details
                    </span>
                    <input
                      type="text"
                      class="rounded-none max-w-full outline-none inline-block text-start overflow-hidden border-b duration-150 transition-colors bg-transparent cursor-text px-0 truncate border-transparent placeholder-opacity-1 py-1 my-2 placeholder-gray-800 focus:placeholder-gray-400 hover:border-gray-300 focus:border-brand-500"
                      alt="Personal details"
                      id="rename-field-focus-id-personalDetails"
                      placeholder="Personal details"
                      value="Personal details"
                      style={{
                        width: "162px",
                        outline: "none",
                        fontFamily: "inherit",
                        fontWeight: "inherit",
                        fontSize: "inherit",
                        direction: "ltr",
                      }}
                    ></input>
                  </div>
                </div>
                <div className="py-6 flex whitespace-nowrap items-start">
                  <div className="flex me-2">
                    <div className="relative inline-flex">
                      <button
                        className="inline-flex border items-center justify-center rounded-button cursor-pointer relative box-content transition-colors duration-150 overflow-hidden max-w-full focus-visible:ring-4 ring-brand bg-transparent active:bg-brand-100 not-touch:active:bg-brand-100 text-gray-700 border-gray-400 not-touch:hover:bg-brand-50 not-touch:hover:border-brand-400 font-medium py-1 ps-1 pe-1 text-base"
                        type="button"
                        style={{ outline: "none" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="px-0.5 flex-shrink-0 box-content h-6 w-5"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z"
                          ></path>
                        </svg>
                      </button>
                      <div style={{ display: "none" }}>
                        <div
                          class="flex flex-col border border-gray-100 rounded shadow-md bg-white py-2"
                          style={{ minWidth: "33.6px" }}
                        >
                          <button
                            type="button"
                            class="transition-colors duration-150 whitespace-nowrap outline-none flex items-center justify-start px-5 sm:px-4 py-3 sm:py-1.25 focus-visible:bg-brand-500 not-touch:hover:bg-brand-500 focus-visible:text-white not-touch:hover:text-white active:bg-brand-300 active:text-white w-max min-w-full text-start sm:text-base text-lg text-gray-800"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="w-5 md:w-4 me-2 "
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607l-9.58-9.58A2.25 2.25 0 0 0 9.568 3z"
                              ></path>
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 6h.008v.008H6V6z"
                              ></path>
                            </svg>
                            Rename section
                          </button>
                          <button
                            type="button"
                            class="transition-colors duration-150 whitespace-nowrap outline-none flex items-center justify-start px-5 sm:px-4 py-3 sm:py-1.25 focus-visible:bg-brand-500 not-touch:hover:bg-brand-500 focus-visible:text-white not-touch:hover:text-white active:bg-brand-300 active:text-white w-max min-w-full text-start sm:text-base text-lg text-gray-800"
                          >
                            <svg
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                              stroke-width="0.5"
                              stroke="currentColor"
                              class="w-5 md:w-4 me-2 "
                            >
                              <g
                                clip-path="url(#page-break_svg__a)"
                                transform="matrix(1 0 0 1.02717 .46 -.29)"
                              >
                                <path d="M17.928 15.798h1.278v3.833a2.558 2.558 0 0 1-2.556 2.556H6.428a2.558 2.558 0 0 1-2.555-2.556v-3.833H5.15v3.833c0 .707.571 1.278 1.278 1.278H16.65c.707 0 1.278-.571 1.278-1.278zm-4.472-6.39a1.917 1.917 0 0 1-1.917-1.916V3.02H6.43c-.708 0-1.279.572-1.279 1.278v7.666H3.873V4.298a2.557 2.557 0 0 1 2.555-2.556h6.233c.507 0 .999.202 1.358.561l4.624 4.626c.36.36.563.85.563 1.358v3.677h-1.278V9.41Zm4.284-1.573-4.628-4.628a.62.62 0 0 0-.295-.168v4.453a.64.64 0 0 0 .639.639h4.452a.609.609 0 0 0-.168-.296ZM5.79 13.242a.64.64 0 0 1 .638.639.64.64 0 0 1-.639.639H.68a.64.64 0 0 1 0-1.278zm7.666 0a.64.64 0 0 1 .639.639.64.64 0 0 1-.64.639H9.624a.64.64 0 0 1-.64-.64.64.64 0 0 1 .64-.638zm8.944 0a.64.64 0 0 1 .64.639.64.64 0 0 1-.64.639h-5.11a.64.64 0 0 1-.64-.64.64.64 0 0 1 .64-.638z"></path>
                              </g>
                              <defs>
                                <clipPath id="page-break_svg__a">
                                  <path
                                    fill="#fff"
                                    transform="translate(.04 .464)"
                                    d="M0 0h23v23H0z"
                                  ></path>
                                </clipPath>
                              </defs>
                            </svg>
                            Add page break
                          </button>
                          <div class="w-full h-px bg-gray-200 my-2"></div>
                          <div class="w-max min-w-full whitespace-nowrap px-5 sm:px-4 py-3 sm:py-1.25 text-start text-base sm:text-sm font-semibold uppercase">
                            Show name in
                          </div>
                          <button
                            type="button"
                            class="transition-colors duration-150 whitespace-nowrap outline-none flex items-center justify-start px-5 sm:px-4 py-3 sm:py-1.25 focus-visible:bg-brand-500 not-touch:hover:bg-brand-500 focus-visible:text-white not-touch:hover:text-white active:bg-brand-300 active:text-white w-max min-w-full text-start sm:text-base text-lg text-gray-800"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="w-5 md:w-4 me-2"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m4.5 12.75 6 6 9-13.5"
                              ></path>
                            </svg>
                            Title
                          </button>
                          <button
                            type="button"
                            class="transition-colors duration-150 whitespace-nowrap outline-none flex items-center justify-start px-5 sm:px-4 py-3 sm:py-1.25 focus-visible:bg-brand-500 not-touch:hover:bg-brand-500 focus-visible:text-white not-touch:hover:text-white active:bg-brand-300 active:text-white w-max min-w-full text-start sm:text-base text-lg text-gray-800"
                          >
                            <div class="w-5 md:w-4 me-2"></div>Personal details
                          </button>
                          <button
                            type="button"
                            class="transition-colors duration-150 whitespace-nowrap outline-none flex items-center justify-start px-5 sm:px-4 py-3 sm:py-1.25 focus-visible:bg-brand-500 not-touch:hover:bg-brand-500 focus-visible:text-white not-touch:hover:text-white active:bg-brand-300 active:text-white w-max min-w-full text-start sm:text-base text-lg text-gray-800"
                          >
                            <div class="w-5 md:w-4 me-2"></div>Both
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    class="inline-flex border items-center justify-center rounded-button cursor-pointer relative box-content transition-colors duration-150 overflow-hidden max-w-full focus-visible:ring-4 ring-brand bg-transparent active:bg-brand-100 not-touch:active:bg-brand-100 text-gray-700 border-gray-400 not-touch:hover:bg-brand-50 not-touch:hover:border-brand-400 font-medium py-1 ps-1 pe-1 text-base"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="px-0.5 flex-shrink-0 box-content h-6 w-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m4.5 15.75 7.5-7.5 7.5 7.5"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <p className="text-gray-500"></p>
              <p style={{ direction: "ltr" }}></p>
              <div className="w-full mb-4">
                <div className="-mx-2"></div>
                <div className="mx-2">
                  <div className="flex-wrap sm:flex">
                    <div class="sm:flex-shrink-0 pe-4">
                      <div class="flex relative flex-col py-2 h-32 sm:h-full w-24 sm:w-32">
                        <div class="flex items-center mb-1">
                          <label class="flex-grow truncate block font-medium text-gray-600 text-sm">
                            Photo
                          </label>
                        </div>
                        <button
                          type="button"
                          class="border border-transparent bg-gray-100 rounded py-2 px-3 text-base transition-colors duration-150 not-touch:hover:border-brand-500 not-touch:hover:bg-brand-50 w-full h-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
                          style={{ outline: "none" }}
                        >
                          <div class="sr-only">Update</div>
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-width="0.7"
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-5 text-gray-400"
                          >
                            <path d="M12 12c1.47 0 2.663-1.17 2.663-2.615 0-1.444-1.192-2.615-2.663-2.615-1.47 0-2.663 1.171-2.663 2.615C9.337 10.83 10.531 12 12 12zm0-4.576c1.101 0 1.997.88 1.997 1.961 0 1.082-.894 1.961-1.997 1.961-1.103 0-1.997-.878-1.997-1.96 0-1.083.894-1.962 1.997-1.962zm8.655-4.576H3.345c-1.103 0-1.997.878-1.997 1.961v14.382c0 1.082.894 1.96 1.997 1.96h17.31c1.103 0 1.997-.877 1.997-1.96V4.809c0-1.083-.895-1.96-1.997-1.96zm1.331 16.343c0 .72-.598 1.307-1.331 1.307H3.345a1.321 1.321 0 0 1-1.331-1.307V4.809c0-.72.598-1.307 1.331-1.307h17.31c.733 0 1.331.587 1.331 1.307zm-8.655-5.884H10.67c-1.839 0-3.33 1.464-3.33 3.269a.66.66 0 0 0 .667.654h7.988a.66.66 0 0 0 .666-.654c0-1.806-1.49-3.269-3.329-3.269zm-5.325 3.269c0-1.442 1.194-2.615 2.663-2.615h2.662c1.469 0 2.663 1.173 2.663 2.615z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div class="flex-grow max-w-full">
                      <div class="flex flex-wrap -mx-2">
                        <div class="w-full sm:flex-equal-width px-2">
                          <div class="py-2">
                            <div class="flex items-center mb-1">
                              <label
                                for="focus-id-name-%{givenName}"
                                class="flex-grow truncate block font-medium text-gray-600 text-sm"
                              >
                                Given name
                              </label>
                            </div>
                            <div class="relative">
                              <input
                                id="focus-id-name-%{givenName}"
                                data-s="Given name"
                                type="text"
                                size="1"
                                autocomplete="given-name"
                                class="w-full appearance-none border focus:border-brand-400 focus:bg-brand-50 rounded py-2 px-3 text-base transition-colors duration-150 text-gray-400 border-transparent bg-gray-100 "
                                value=""
                                fdprocessedid="58kj36"
                                style={{ outline: "none", direction: "ltr" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div class="w-full sm:flex-equal-width px-2">
                          <div class="py-2">
                            <div class="flex items-center mb-1">
                              <label
                                for="focus-id-name-%{familyName}"
                                class="flex-grow truncate block font-medium text-gray-600 text-sm"
                              >
                                Family name
                              </label>
                            </div>
                            <div class="relative">
                              <input
                                id="focus-id-name-%{familyName}"
                                data-s="Family name"
                                type="text"
                                size="1"
                                autocomplete="family-name"
                                class="w-full appearance-none border focus:border-brand-400 focus:bg-brand-50 rounded py-2 px-3 text-base transition-colors duration-150 text-gray-400 border-transparent bg-gray-100 "
                                value=""
                                fdprocessedid="mzjuxs"
                                style={{ outline: "none", direction: "ltr" }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="py-2">
                        <div class="flex items-center mb-1">
                          <label
                            for="input-0cf63710-f40c-42d2-90e1-b93cc670d2d8"
                            class="flex-grow truncate block font-medium text-gray-600 text-sm"
                          >
                            Email address
                          </label>
                        </div>
                        <div class="relative">
                          <input
                            id="input-0cf63710-f40c-42d2-90e1-b93cc670d2d8"
                            data-s="Email address"
                            type="text"
                            size="1"
                            autocomplete="email"
                            class="w-full appearance-none border focus:border-brand-400 focus:bg-brand-50 rounded py-2 px-3 text-base transition-colors duration-150 text-gray-400 border-transparent bg-gray-100 "
                            value=""
                            fdprocessedid="ssrdck"
                            style={{ outline: "none", direction: "ltr" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="py-2">
                    <div class="flex items-center mb-1">
                      <label
                        for="input-94abc1a6-c9a0-44c9-97d6-7d2fcd96aa27"
                        class="flex-grow truncate block font-medium text-gray-600 text-sm"
                      >
                        Headline
                      </label>
                    </div>
                    <div class="relative">
                      <input
                        id="input-94abc1a6-c9a0-44c9-97d6-7d2fcd96aa27"
                        data-s="Headline"
                        type="text"
                        size="1"
                        class="w-full appearance-none border focus:border-brand-400 focus:bg-brand-50 rounded py-2 px-3 text-base transition-colors duration-150 text-gray-400 border-transparent bg-gray-100 "
                        value=""
                        fdprocessedid="fx1r8j"
                        style={{ outline: "none", direction: "ltr" }}
                      />
                    </div>
                  </div>
                  <div class="py-2">
                    <div class="flex items-center mb-1">
                      <label
                        for="input-14f08466-e29e-4f49-af3a-9a9cbe22ff15"
                        class="flex-grow truncate block font-medium text-gray-600 text-sm"
                      >
                        Phone number
                      </label>
                    </div>
                    <div class="relative">
                      <input
                        id="input-14f08466-e29e-4f49-af3a-9a9cbe22ff15"
                        data-s="Phone number"
                        type="text"
                        size="1"
                        autocomplete="tel"
                        class="w-full appearance-none border focus:border-brand-400 focus:bg-brand-50 rounded py-2 px-3 text-base transition-colors duration-150 text-gray-400 border-transparent bg-gray-100 "
                        value=""
                        fdprocessedid="7otbh6"
                        style={{ outline: "none", direction: "ltr" }}
                      />
                    </div>
                  </div>
                  <div class="flex flex-wrap -mx-2">
                    <div class="w-full sm:flex-equal-width px-2">
                      <div class="py-2">
                        <div class="flex items-center mb-1">
                          <label
                            for="focus-id-address-%{address}"
                            class="flex-grow truncate block font-medium text-gray-600 text-sm"
                          >
                            Address
                          </label>
                        </div>
                        <div class="relative">
                          <input
                            id="focus-id-address-%{address}"
                            data-s="Address"
                            type="text"
                            size="1"
                            autocomplete="street-address"
                            class="w-full appearance-none border focus:border-brand-400 focus:bg-brand-50 rounded py-2 px-3 text-base transition-colors duration-150 text-gray-800 border-transparent bg-gray-100 "
                            value="H.no:1-7-127/A , Gunj ,Bhongir"
                            fdprocessedid="hdd5dh"
                            style={{ outline: "none", direction: "ltr" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-wrap -mx-2">
                    <div class="w-full sm:flex-equal-width px-2">
                      <div class="py-2">
                        <div class="flex items-center mb-1">
                          <label
                            for="focus-id-address-%{zipcode}"
                            class="flex-grow truncate block font-medium text-gray-600 text-sm"
                          >
                            Post code
                          </label>
                        </div>
                        <div class="relative">
                          <input
                            id="focus-id-address-%{zipcode}"
                            data-s="Post code"
                            type="text"
                            size="1"
                            autocomplete="postal-code"
                            class="w-full appearance-none border focus:border-brand-400 focus:bg-brand-50 rounded py-2 px-3 text-base transition-colors duration-150 text-gray-800 border-transparent bg-gray-100 "
                            value="508116"
                            fdprocessedid="u0hxg"
                            style={{ outline: "none", direction: "ltr" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div class="w-full sm:flex-equal-width px-2">
                      <div class="py-2">
                        <div class="flex items-center mb-1">
                          <label
                            for="focus-id-address-%{city}"
                            class="flex-grow truncate block font-medium text-gray-600 text-sm"
                          >
                            City
                          </label>
                        </div>
                        <div class="relative">
                          <input
                            id="focus-id-address-%{city}"
                            data-s="City"
                            type="text"
                            size="1"
                            autocomplete="address-level2"
                            className="w-full appearance-none border focus:border-brand-400 focus:bg-brand-50 rounded py-2 px-3 text-base transition-colors duration-150 text-gray-800 border-transparent bg-gray-100 "
                            value="Bhongir"
                            fdprocessedid="pz67qg"
                            style={{ outline: "none", direction: "ltr" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-wrap -m-2 pt-5 pb-3">
                    <div class="p-2">
                      <button
                        class="inline-flex border items-center justify-center rounded-button cursor-pointer relative box-content transition-colors duration-150 overflow-hidden max-w-full focus-visible:ring-4 ring-brand bg-transparent active:bg-brand-100 not-touch:active:bg-brand-100 text-gray-700 border-gray-400 not-touch:hover:bg-brand-50 not-touch:hover:border-brand-400 font-medium py-1 ps-1 pe-3 text-base"
                        type="button"
                        style={{ outline: "none" }}
                        fdprocessedid="1vtu5e"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="px-0.5 flex-shrink-0 box-content h-6 w-5"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 6v12m6-6H6"
                          ></path>
                        </svg>
                        <div class="truncate h-6 ms-0.5 ">Date of birth</div>
                      </button>
                    </div>
                    <div class="p-2">
                      <button
                        class="inline-flex border items-center justify-center rounded-button cursor-pointer relative box-content transition-colors duration-150 overflow-hidden max-w-full focus-visible:ring-4 ring-brand bg-transparent active:bg-brand-100 not-touch:active:bg-brand-100 text-gray-700 border-gray-400 not-touch:hover:bg-brand-50 not-touch:hover:border-brand-400 font-medium py-1 ps-1 pe-3 text-base"
                        type="button"
                        style={{ outline: "none" }}
                        fdprocessedid="3ccx4"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="px-0.5 flex-shrink-0 box-content h-6 w-5"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 6v12m6-6H6"
                          ></path>
                        </svg>
                        <div class="truncate h-6 ms-0.5 ">Place of birth</div>
                      </button>
                    </div>
                    <div class="p-2">
                      <button
                        class="inline-flex border items-center justify-center rounded-button cursor-pointer relative box-content transition-colors duration-150 overflow-hidden max-w-full focus-visible:ring-4 ring-brand bg-transparent active:bg-brand-100 not-touch:active:bg-brand-100 text-gray-700 border-gray-400 not-touch:hover:bg-brand-50 not-touch:hover:border-brand-400 font-medium py-1 ps-1 pe-3 text-base"
                        type="button"
                        style={{ outline: "none" }}
                        fdprocessedid="1t4yui"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="px-0.5 flex-shrink-0 box-content h-6 w-5"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 6v12m6-6H6"
                          ></path>
                        </svg>
                        <div class="truncate h-6 ms-0.5 ">Driver's license</div>
                      </button>
                    </div>
                    <div class="p-2">
                      <button
                        class="inline-flex border items-center justify-center rounded-button cursor-pointer relative box-content transition-colors duration-150 overflow-hidden max-w-full focus-visible:ring-4 ring-brand bg-transparent active:bg-brand-100 not-touch:active:bg-brand-100 text-gray-700 border-gray-400 not-touch:hover:bg-brand-50 not-touch:hover:border-brand-400 font-medium py-1 ps-1 pe-3 text-base"
                        type="button"
                        style={{ outline: "none" }}
                        fdprocessedid="i1583k"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="px-0.5 flex-shrink-0 box-content h-6 w-5"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 6v12m6-6H6"
                          ></path>
                        </svg>
                        <div class="truncate h-6 ms-0.5 ">Gender</div>
                      </button>
                    </div>
                    <div class="p-2">
                      <button
                        class="inline-flex border items-center justify-center rounded-button cursor-pointer relative box-content transition-colors duration-150 overflow-hidden max-w-full focus-visible:ring-4 ring-brand bg-transparent active:bg-brand-100 not-touch:active:bg-brand-100 text-gray-700 border-gray-400 not-touch:hover:bg-brand-50 not-touch:hover:border-brand-400 font-medium py-1 ps-1 pe-3 text-base"
                        type="button"
                        style={{ outline: "none" }}
                        fdprocessedid="e6m5zr"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="px-0.5 flex-shrink-0 box-content h-6 w-5"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 6v12m6-6H6"
                          ></path>
                        </svg>
                        <div class="truncate h-6 ms-0.5 ">Nationality</div>
                      </button>
                    </div>
                    <div class="p-2">
                      <button
                        class="inline-flex border items-center justify-center rounded-button cursor-pointer relative box-content transition-colors duration-150 overflow-hidden max-w-full focus-visible:ring-4 ring-brand bg-transparent active:bg-brand-100 not-touch:active:bg-brand-100 text-gray-700 border-gray-400 not-touch:hover:bg-brand-50 not-touch:hover:border-brand-400 font-medium py-1 ps-1 pe-3 text-base"
                        type="button"
                        style={{ outline: "none" }}
                        fdprocessedid="wx8h1u"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="px-0.5 flex-shrink-0 box-content h-6 w-5"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 6v12m6-6H6"
                          ></path>
                        </svg>
                        <div class="truncate h-6 ms-0.5 ">Civil status</div>
                      </button>
                    </div>
                    <div class="p-2">
                      <button
                        class="inline-flex border items-center justify-center rounded-button cursor-pointer relative box-content transition-colors duration-150 overflow-hidden max-w-full focus-visible:ring-4 ring-brand bg-transparent active:bg-brand-100 not-touch:active:bg-brand-100 text-gray-700 border-gray-400 not-touch:hover:bg-brand-50 not-touch:hover:border-brand-400 font-medium py-1 ps-1 pe-3 text-base"
                        type="button"
                        style={{ outline: "none" }}
                        fdprocessedid="t37vlc"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="px-0.5 flex-shrink-0 box-content h-6 w-5"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 6v12m6-6H6"
                          ></path>
                        </svg>
                        <div class="truncate h-6 ms-0.5 ">Website</div>
                      </button>
                    </div>
                    <div class="p-2">
                      <button
                        class="inline-flex border items-center justify-center rounded-button cursor-pointer relative box-content transition-colors duration-150 overflow-hidden max-w-full focus-visible:ring-4 ring-brand bg-transparent active:bg-brand-100 not-touch:active:bg-brand-100 text-gray-700 border-gray-400 not-touch:hover:bg-brand-50 not-touch:hover:border-brand-400 font-medium py-1 ps-1 pe-3 text-base"
                        type="button"
                        style={{ outline: "none" }}
                        fdprocessedid="bjb2bl"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="px-0.5 flex-shrink-0 box-content h-6 w-5"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 6v12m6-6H6"
                          ></path>
                        </svg>
                        <div class="truncate h-6 ms-0.5 ">LinkedIn</div>
                      </button>
                    </div>
                    <div class="p-2">
                      <button
                        class="inline-flex border items-center justify-center rounded-button cursor-pointer relative box-content transition-colors duration-150 overflow-hidden max-w-full focus-visible:ring-4 ring-brand bg-transparent active:bg-brand-100 not-touch:active:bg-brand-100 text-gray-700 border-gray-400 not-touch:hover:bg-brand-50 not-touch:hover:border-brand-400 font-medium py-1 ps-1 pe-3 text-base"
                        type="button"
                        style={{ outline: "none" }}
                        fdprocessedid="8tkmfg"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="px-0.5 flex-shrink-0 box-content h-6 w-5"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 6v12m6-6H6"
                          ></path>
                        </svg>
                        <div class="truncate h-6 ms-0.5 ">Custom field</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-rbd-droppable-id="sections" data-rbd-droppable-context-id="0">
          <div
            class="flex direct-group w-full items-center relative bg-white rounded-large  draggable-section"
            data-rbd-draggable-context-id="0"
            data-rbd-draggable-id="educations"
          >
            <div class=""></div>
            <div class="w-full flex relative flex-col">
              <div class="w-full border-b border-gray-200 collapsible-section">
                <div class="flex items-stretch w-full">
                  <button
                    type="button"
                    class="flex-grow py-3 pe-6 text-start overflow-hidden rounded focus-visible:ring-4 ring-brand ring-inset"
                    fdprocessedid="jh0w9r"
                  >
                    <h3
                      class="text-xl pl-5 pb-1 truncate text-gray-400 font-bold select-none"
                      style={{ direction: "ltr" }}
                    >
                      Education
                    </h3>
                  </button>
                  <div class="py-6 flex whitespace-nowrap items-start">
                    <button
                      class="inline-flex border items-center justify-center rounded-button cursor-pointer relative box-content transition-colors duration-150 overflow-hidden max-w-full focus-visible:ring-4 ring-brand bg-transparent active:bg-brand-100 not-touch:active:bg-brand-100 text-gray-700 border-gray-400 not-touch:hover:bg-brand-50 not-touch:hover:border-brand-400 font-medium py-1 ps-1 pe-1 text-base"
                      type="button"
                      style={{ outline: "none" }}
                      fdprocessedid="1g6xx"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="px-0.5 flex-shrink-0 box-content h-6 w-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 6v12m6-6H6"
                        ></path>
                      </svg>
                      <span class="sr-only">Add section</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <span
              tabindex="0"
              role="button"
              aria-describedby="rbd-hidden-text-0-hidden-text-0"
              data-rbd-drag-handle-draggable-id="educations"
              data-rbd-drag-handle-context-id="0"
              draggable="false"
              class="absolute px-1 transition-colors duration-150 opacity-100 not-touch:opacity-0 direct-group-hover:opacity-100 text-gray-400 top-8 start-sectionoffset mt-px self-start"
            >
              <svg
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="w-4"
              >
                <path
                  d="M9.01 5.815v.01m0 6.99v.01m0 6.99v.01m0-13.01a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM15.344 5.815v.01m0 6.99v.01m0 6.99v.01m0-13.01a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                  stroke="#000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </span>
          </div>
          <div
            class="flex direct-group w-full items-center relative bg-white rounded-large  draggable-section"
            data-rbd-draggable-context-id="0"
            data-rbd-draggable-id="employment"
          >
            <div class=""></div>
            <div class="w-full flex relative flex-col">
              <div class="w-full border-b border-gray-200 collapsible-section">
                <div class="flex items-stretch w-full">
                  <button
                    type="button"
                    class="flex-grow py-3 pe-6 text-start overflow-hidden rounded focus-visible:ring-4 ring-brand ring-inset"
                    fdprocessedid="fvb0hl"
                  >
                    <h3
                      class="text-xl pl-5 pb-1 truncate text-gray-400 font-bold select-none"
                      style={{ direction: "ltr" }}
                    >
                      Employment
                    </h3>
                  </button>
                  <div class="py-6 flex whitespace-nowrap items-start">
                    <button
                      class="inline-flex border items-center justify-center rounded-button cursor-pointer relative box-content transition-colors duration-150 overflow-hidden max-w-full focus-visible:ring-4 ring-brand bg-transparent active:bg-brand-100 not-touch:active:bg-brand-100 text-gray-700 border-gray-400 not-touch:hover:bg-brand-50 not-touch:hover:border-brand-400 font-medium py-1 ps-1 pe-1 text-base"
                      type="button"
                      style={{ outline: "none" }}
                      fdprocessedid="9cixz"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="px-0.5 flex-shrink-0 box-content h-6 w-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 6v12m6-6H6"
                        ></path>
                      </svg>
                      <span class="sr-only">Add section</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <span
              tabindex="0"
              role="button"
              aria-describedby="rbd-hidden-text-0-hidden-text-0"
              data-rbd-drag-handle-draggable-id="employment"
              data-rbd-drag-handle-context-id="0"
              draggable="false"
              class="absolute px-1 transition-colors duration-150 opacity-100 not-touch:opacity-0 direct-group-hover:opacity-100 text-gray-400 top-8 start-sectionoffset mt-px self-start"
            >
              <svg
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="w-4"
              >
                <path
                  d="M9.01 5.815v.01m0 6.99v.01m0 6.99v.01m0-13.01a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM15.344 5.815v.01m0 6.99v.01m0 6.99v.01m0-13.01a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                  stroke="#000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </span>
          </div>
          <div
            class="flex direct-group w-full items-center relative bg-white rounded-large  draggable-section"
            data-rbd-draggable-context-id="0"
            data-rbd-draggable-id="skills"
          >
            <div class=""></div>
            <div class="w-full flex relative flex-col">
              <div class="w-full border-b border-gray-200 collapsible-section">
                <div class="flex items-stretch w-full">
                  <button
                    type="button"
                    class="flex-grow py-3 pe-6 text-start overflow-hidden rounded focus-visible:ring-4 ring-brand ring-inset"
                    fdprocessedid="r48w1w"
                  >
                    <h3
                      class="text-xl pl-5 pb-1 truncate text-gray-400 font-bold select-none"
                      style={{ direction: "ltr" }}
                    >
                      Skills
                    </h3>
                  </button>
                  <div class="py-6 flex whitespace-nowrap items-start">
                    <button
                      class="inline-flex border items-center justify-center rounded-button cursor-pointer relative box-content transition-colors duration-150 overflow-hidden max-w-full focus-visible:ring-4 ring-brand bg-transparent active:bg-brand-100 not-touch:active:bg-brand-100 text-gray-700 border-gray-400 not-touch:hover:bg-brand-50 not-touch:hover:border-brand-400 font-medium py-1 ps-1 pe-1 text-base"
                      type="button"
                      style={{ outline: "none" }}
                      fdprocessedid="d6d0hw"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="px-0.5 flex-shrink-0 box-content h-6 w-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 6v12m6-6H6"
                        ></path>
                      </svg>
                      <span class="sr-only">Add section</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <span
              tabindex="0"
              role="button"
              aria-describedby="rbd-hidden-text-0-hidden-text-0"
              data-rbd-drag-handle-draggable-id="skills"
              data-rbd-drag-handle-context-id="0"
              draggable="false"
              class="absolute px-1 transition-colors duration-150 opacity-100 not-touch:opacity-0 direct-group-hover:opacity-100 text-gray-400 top-8 start-sectionoffset mt-px self-start"
            >
              <svg
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="w-4"
              >
                <path
                  d="M9.01 5.815v.01m0 6.99v.01m0 6.99v.01m0-13.01a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM15.344 5.815v.01m0 6.99v.01m0 6.99v.01m0-13.01a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                  stroke="#000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </span>
          </div>
          <div
            class="flex direct-group w-full items-center relative bg-white rounded-large  draggable-section"
            data-rbd-draggable-context-id="0"
            data-rbd-draggable-id="languages"
          >
            <div class=""></div>
            <div class="w-full flex relative flex-col">
              <div class="w-full border-b border-gray-200 collapsible-section">
                <div class="flex items-stretch w-full">
                  <button
                    type="button"
                    class="flex-grow py-3 pe-6 text-start overflow-hidden rounded focus-visible:ring-4 ring-brand ring-inset"
                    fdprocessedid="bn6xx"
                  >
                    <h3
                      class="text-xl pl-5 pb-1 truncate text-gray-400 font-bold select-none"
                      style={{ direction: "ltr" }}
                    >
                      Languages
                    </h3>
                  </button>
                  <div class="py-6 flex whitespace-nowrap items-start">
                    <button
                      class="inline-flex border items-center justify-center rounded-button cursor-pointer relative box-content transition-colors duration-150 overflow-hidden max-w-full focus-visible:ring-4 ring-brand bg-transparent active:bg-brand-100 not-touch:active:bg-brand-100 text-gray-700 border-gray-400 not-touch:hover:bg-brand-50 not-touch:hover:border-brand-400 font-medium py-1 ps-1 pe-1 text-base"
                      type="button"
                      style={{ outline: "none" }}
                      fdprocessedid="r5yzwh"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="px-0.5 flex-shrink-0 box-content h-6 w-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 6v12m6-6H6"
                        ></path>
                      </svg>
                      <span class="sr-only">Add section</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <span
              tabindex="0"
              role="button"
              aria-describedby="rbd-hidden-text-0-hidden-text-0"
              data-rbd-drag-handle-draggable-id="languages"
              data-rbd-drag-handle-context-id="0"
              draggable="false"
              class="absolute px-1 transition-colors duration-150 opacity-100 not-touch:opacity-0 direct-group-hover:opacity-100 text-gray-400 top-8 start-sectionoffset mt-px self-start"
            >
              <svg
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="w-4"
              >
                <path
                  d="M9.01 5.815v.01m0 6.99v.01m0 6.99v.01m0-13.01a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM15.344 5.815v.01m0 6.99v.01m0 6.99v.01m0-13.01a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                  stroke="#000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </span>
          </div>
          <div
            class="flex direct-group w-full items-center relative bg-white rounded-large  draggable-section"
            data-rbd-draggable-context-id="0"
            data-rbd-draggable-id="hobbies"
          >
            <div class=""></div>
            <div class="w-full flex relative flex-col">
              <div class="w-full border-b border-gray-200 collapsible-section">
                <div class="flex items-stretch w-full">
                  <button
                    type="button"
                    class="flex-grow py-3 pe-6 text-start overflow-hidden rounded focus-visible:ring-4 ring-brand ring-inset"
                    fdprocessedid="0u8909"
                  >
                    <h3
                      class="text-xl pl-5 pb-1 truncate text-gray-400 font-bold select-none"
                      style={{ direction: "ltr" }}
                    >
                      Hobbies
                    </h3>
                  </button>
                  <div class="py-6 flex whitespace-nowrap items-start">
                    <button
                      class="inline-flex border items-center justify-center rounded-button cursor-pointer relative box-content transition-colors duration-150 overflow-hidden max-w-full focus-visible:ring-4 ring-brand bg-transparent active:bg-brand-100 not-touch:active:bg-brand-100 text-gray-700 border-gray-400 not-touch:hover:bg-brand-50 not-touch:hover:border-brand-400 font-medium py-1 ps-1 pe-1 text-base"
                      type="button"
                      style={{ outline: "none" }}
                      fdprocessedid="o2ifnn"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="px-0.5 flex-shrink-0 box-content h-6 w-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 6v12m6-6H6"
                        ></path>
                      </svg>
                      <span class="sr-only">Add section</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <span
              tabindex="0"
              role="button"
              aria-describedby="rbd-hidden-text-0-hidden-text-0"
              data-rbd-drag-handle-draggable-id="hobbies"
              data-rbd-drag-handle-context-id="0"
              draggable="false"
              class="absolute px-1 transition-colors duration-150 opacity-100 not-touch:opacity-0 direct-group-hover:opacity-100 text-gray-400 top-8 start-sectionoffset mt-px self-start"
            >
              <svg
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="w-4"
              >
                <path
                  d="M9.01 5.815v.01m0 6.99v.01m0 6.99v.01m0-13.01a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM15.344 5.815v.01m0 6.99v.01m0 6.99v.01m0-13.01a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                  stroke="#000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </span>
          </div>
          <div
            class="flex direct-group w-full items-center relative bg-white rounded-large  draggable-section"
            data-rbd-draggable-context-id="0"
            data-rbd-draggable-id="internships"
          >
            <div class=""></div>
            <div class="w-full flex relative flex-col">
              <div class="w-full border-b border-gray-200 collapsible-section">
                <div class="flex items-stretch w-full">
                  <button
                    type="button"
                    class="flex-grow py-3 pe-6 text-start overflow-hidden rounded focus-visible:ring-4 ring-brand ring-inset"
                    fdprocessedid="yb24za"
                  >
                    <h3
                      class="text-xl pl-5 pb-1 truncate text-gray-400 font-bold select-none"
                      style={{ direction: "ltr" }}
                    >
                      Internships
                    </h3>
                  </button>
                  <div class="py-6 flex whitespace-nowrap items-start">
                    <button
                      class="inline-flex border items-center justify-center rounded-button cursor-pointer relative box-content transition-colors duration-150 overflow-hidden max-w-full focus-visible:ring-4 ring-brand bg-transparent active:bg-brand-100 not-touch:active:bg-brand-100 text-gray-700 border-gray-400 not-touch:hover:bg-brand-50 not-touch:hover:border-brand-400 font-medium py-1 ps-1 pe-1 text-base"
                      type="button"
                      style={{ outline: "none" }}
                      fdprocessedid="ekjhh"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="px-0.5 flex-shrink-0 box-content h-6 w-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 6v12m6-6H6"
                        ></path>
                      </svg>
                      <span class="sr-only">Add section</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <span
              tabindex="0"
              role="button"
              aria-describedby="rbd-hidden-text-0-hidden-text-0"
              data-rbd-drag-handle-draggable-id="internships"
              data-rbd-drag-handle-context-id="0"
              draggable="false"
              class="absolute px-1 transition-colors duration-150 opacity-100 not-touch:opacity-0 direct-group-hover:opacity-100 text-gray-400 top-8 start-sectionoffset mt-px self-start"
            >
              <svg
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="w-4"
              >
                <path
                  d="M9.01 5.815v.01m0 6.99v.01m0 6.99v.01m0-13.01a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM15.344 5.815v.01m0 6.99v.01m0 6.99v.01m0-13.01a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                  stroke="#000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </span>
          </div>
        </div>
        {/* <div className="lg:hidden w-full mt-8 mb-0 md:mb-8 flex flex-row-reverse justify-between">
        <button className="bg-orange-600 rounded-md p-2 text-white"
        onClick={() => setResume(!resume)}>Preview</button>
        </div> */}
        <div className="hidden lg:block">
        <div className="w-full mt-8 mb-0 md:mb-8 flex flex-row-reverse justify-between">
        <button className="bg-orange-600 rounded-md p-2 text-white">Download</button>
        </div>
        </div>
      </div>
      <div className={`${ resume ? "block" : "hidden" } `}>
      <div className=" fixed end-0 w-1/2 bottom-0 p-5 overflow-y-auto top-[65.6px] ">
        <button className="bg-black text-white">back</button>
        <div className="w-full mx-auto block shadow-md rounded object-cover object-left-top overflow-hidden select-none max-w-[441.8px] mb-[71.2px]">
            hiii
        </div>
      </div>
      </div>
    </div>
  );
};

export default resumedetails;
