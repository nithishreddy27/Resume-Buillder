import { FiMenu } from "react-icons/fi";
import React, { useState } from "react";
import Link from "next/link";
import { useUser } from "../lib/hooks";
import { useRouter } from "next/router";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const user = useUser();
  const router = useRouter();

  function runMe() {
    // console.log(user.profile.firstName)
    if (user.notificationMethod == "student") {
      router.push("/register/addStdDetails");
    }
    if (user.notificationMethod == "college") {
      router.push("/register/addCollegeDetails");
    }
    if (user.notificationMethod == "individual") {
      router.push("/register/addIndDetails");
    }
    if (user.notificationMethod == "corporate") {
      router.push("/register/addStdDetails");
    }
  }
  return (
    <div>
      <div className="border-b border-gray-300 py-2 fixed top-[-8px] w-[100%] z-40 bg-slate-50">
        <div className="flex items-center justify-between xl:max-w-7xl xl:mx-auto max-w-full px-[8%] flex-wrap w-full">
          {/* <h1>Provast</h1> */}
          <img
            src="https://www.provast.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdj7nomqfd%2Fimage%2Fupload%2Fv1652909540%2Fpvast_B_fpwhlu.png&w=2048&q=75"
            width={220}
            height={55}
          />
          <FiMenu
            className="lg:hidden block h-6 w-6 cursor-pointer"
            onClick={() => setOpen(!open)}
          />
          {user && (
            <>
              {
                <nav
                  className={`${
                    open ? "block" : "hidden"
                  } w-full lg:flex lg:items-center lg:w-auto`}
                >
                  <ul className="text-base text-gray-600 lg:flex lg:justify-between">
                    <li>
                      <Link
                        href="/dashboard"
                        className="lg:pl-8 py-3 block hover:text-orange-700 font-semibold"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`/resume`}
                        className="lg:pl-8 py-3 block hover:text-orange-700 font-semibold"
                      >
                        Resumes
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/profile"
                        className="lg:pl-8 py-3 block hover:text-orange-700 font-semibold"
                      >
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/api/logout"
                        className="lg:pl-8 py-3 block hover:text-orange-700 font-semibold"
                      >
                        Logout
                      </Link>
                    </li>
                  </ul>
                </nav>
              }
              {user.profile.firstName == null && <>{runMe()}</>}
            </>
          )}
          {!user && (
            <nav
              className={`${
                open ? "block" : "hidden"
              } w-full lg:flex lg:items-center lg:w-auto`}
            >
              <ul className="text-base text-gray-600 lg:flex lg:justify-between">
                <li>
                  <Link
                    href="/login"
                    className="lg:pl-8 py-3 block hover:text-orange-700 font-semibold"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="lg:pl-8 py-3 block hover:text-orange-700 font-semibold"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="lg:pl-8 py-3 block hover:text-orange-700 font-semibold"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
