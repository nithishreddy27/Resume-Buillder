<div
                    className={`h-[95%] w-[35%] bg-sky-200 absolute left-10 rounded-b-full p-5 z-10`}
                  >
                    <img
                      src="https://randomuser.me/api/portraits/men/40.jpg"
                      alt=""
                      className="rounded-full h-40 mb-5 mx-auto"
                    />
                    <>
                      <div className="flex">
                        <span>
                          <img
                            src="https://www.freeiconspng.com/uploads/contact-methods-phone-icon-512x512-pixel-3.png"
                            className="w-5 h-5"
                          />
                        </span>
                        <h1 className="mx-4">{details.personal.phone}</h1>
                      </div>
                      <div className="flex my-1">
                        <span>
                          <img
                            src="https://www.freeiconspng.com/uploads/black-mail-icon-4.png"
                            className="w-7 h-7"
                          />
                        </span>
                        <h1 className="mx-2">{details.personal.email}</h1>
                      </div>
                      {details.social.map((item) => (
                        <>{item.enabled==true && (
                          <div className="my-3 flex" key={item.network}>
                          <span>
                            <img
                              src={
                                "https://www." +
                                item.network +
                                ".com/favicon.ico"
                              }
                              alt=""
                              srcset=""
                              className="w-5 grayscale-[40%]"
                            />
                          </span>

                          <Link href={item.url}>
                            <span className="mx-4">{item.username}</span>
                          </Link>
                        </div>
                        )}</>
                      ))}
                    </>
                    {details.skills.length != 0 && (
                      <>
                        {details.skills.filter((skills) => skills.enabled)
                          .length > 0 && (
                          <>
                            <h1 className="text-2xl font-semibold tracking-[2px] mt-5 heading">
                              SKILLS
                            </h1>

                            <div className="my-2">
                              {details.skills.map((item) => (
                                <>
                                  {item.enabled == true && (
                                    <div className="flex" key={item.name}>
                                      <h1 className="">{item.name}</h1>
                                      <p className="absolute right-5">
                                        {item.level}
                                      </p>
                                    </div>
                                  )}
                                </>
                              ))}
                            </div>
                          </>
                        )}
                      </>
                    )}
                    {details.languages.length != 0 && (
                      <>
                        {details.languages.filter(
                          (languages) => languages.enabled
                        ).length > 0 && (
                          <>
                            <h1 className="text-2xl font-semibold tracking-[2px] mt-5 heading">
                              LANGUAGES
                            </h1>
                            <div className="my-2">
                              {details.languages.map((item) => (
                                <>
                                  {item.enabled == true && (
                                    <div className="flex" key={item.name}>
                                      <h1 className="">{item.name}</h1>
                                    </div>
                                  )}
                                </>
                              ))}
                            </div>
                          </>
                        )}
                      </>
                    )}
                    {details.hobbies.length != 0 && (
                      <>
                        {details.hobbies.filter((hobbies) => hobbies.enabled)
                          .length > 0 && (
                          <>
                            <h1 className="text-2xl font-semibold tracking-[2px] mt-5 heading">
                              HOBBIES
                            </h1>
                            <div className="my-2">
                              {details.hobbies.map((item) => (
                                <>
                                  {item.enabled == true && (
                                    <div className="flex" key={item.name}>
                                      <h1 className="">{item.name}</h1>
                                    </div>
                                  )}
                                </>
                              ))}
                            </div>
                          </>
                        )}
                      </>
                    )}
                    {details.awards.length != 0 && (
                      <>
                        {details.awards.filter((awards) => awards.enabled)
                          .length > 0 && (
                          <>
                            <h1 className="text-2xl font-semibold tracking-[2px] mt-5 heading">
                              AWARDS
                            </h1>
                            <div className="my-2">
                              {details.awards.map((item) => (
                                <>
                                  {item.enabled == true && (
                                    <div className="flex" key={item.name}>
                                      <span className=" text-[15px] my-1">
                                        {item.name}{" "}
                                        <span className="">({item.date})</span>
                                      </span>
                                    </div>
                                  )}
                                </>
                              ))}
                            </div>
                          </>
                        )}
                      </>
                    )}
                    {/* <div className="mt-4">
            <h1 className="text-2xl font-semibold tracking-[2px]">HOBBIES</h1>
            {details.hobbies.map((item) => (
              <p className="my-2">{item.name}</p>
            ))}
          </div> */}
                    {details.certifications.length != 0 && (
                      <>
                        {details.certifications.filter(
                          (certifications) => certifications.enabled
                        ).length > 0 && (
                          <div className="mt-4">
                            <h1 className="text-2xl font-semibold tracking-[2px] heading">
                              CERTIFICATIONS
                            </h1>
                            {details.certifications.map((item) => (
                              <>
                                {item.enabled == true && (
                                  <p className="my-2" key={item.name}>
                                    {item.title}
                                  </p>
                                )}
                              </>
                            ))}
                          </div>
                        )}
                      </>
                    )}
</div>
<div
                    className={`w-[100%] h-36 bg-sky-100 top-10 relative z-1 rounded-l-full  p-10`}
                  >
                    <h1 className="text-3xl ml-[50%] font-bold tracking-widest">
                      {details.personal.firstName}{" "}
                      <span>{details.personal.lastName}</span>
                    </h1>
                    <h1 className="ml-[58%] my-2 tracking-widest">
                      {details.personal.role}
                    </h1>
                    <div className="absolute mt-10  left-[330px] w-[57%] h-[100%] text-black">
                      {details.personal.objective != 0 && (
                        <>
                          <h1 className="text-xl font-bold tracking-[1px] heading">
                            OBJECTIVE
                          </h1>
                          <p>{details.personal.objective}</p>
                        </>
                      )}
                      {details.education.length != 0 && (
                        <>
                          {details.education.filter(
                            (education) => education.enabled
                          ).length > 0 && (
                            <>
                              <h1 className="text-xl font-bold tracking-[1px] heading">
                                EDUCATION
                              </h1>
                              {details.education.map((item) => (
                                <>
                                  {item.enabled == true && (
                                    <div
                                      className="mt-4"
                                      key={item.institution}
                                    >
                                      <h1 className="font-semibold">
                                        {item.institution}{" "}
                                        <span className="font-medium">
                                          ({item.startDate.slice(0, 4)}-
                                          {item.endDate.slice(0, 4)})
                                        </span>{" "}
                                      </h1>
                                      <p className="ml-5">
                                        {item.typeOfDegree}
                                      </p>
                                      <p className="ml-5 my-1">
                                        {item.summary.data}
                                      </p>
                                      <p className="ml-5">GPA-{item.gpa}</p>
                                    </div>
                                  )}
                                </>
                              ))}
                            </>
                          )}
                        </>
                      )}

                      {details.work.length != 0 && (
                        <>
                          {details.work.filter((work) => work.enabled).length >
                            0 && (
                            <>
                              <h1 className="text-xl font-bold tracking-[1px] mt-4 heading">
                                WORK
                              </h1>
                              {details.work.map((item) => (
                                <>
                                  {item.enabled == true && (
                                    <div className="mt-4" key={item.company}>
                                      <h1 className="font-semibold">
                                        {item.company}{" "}
                                        <span className="font-medium">
                                          ({item.from.slice(0, 4)}-
                                          {item.to.slice(0, 4)})
                                        </span>{" "}
                                      </h1>

                                      <span className="ml-5 tracking-wider font-semibold">
                                        {item.designation}
                                      </span>
                                      <span className="ml-5 text-sm">
                                        {item.summary.data}
                                      </span>
                                    </div>
                                  )}
                                </>
                              ))}
                            </>
                          )}
                        </>
                      )}
                      {details.projects.length != 0 && (
                        <>
                          {details.projects.filter(
                            (projects) => projects.enabled
                          ).length > 0 && (
                            <div>
                              <h1 className="text-xl font-bold tracking-[1px] mt-4 heading">
                                PROJECTS
                              </h1>
                              {details.projects.map((item) => (
                                <>
                                  {item.enabled == true && (
                                    <div className="mt-4" key={item.name}>
                                      <Link href={item.website}>
                                        <h1 className="font-semibold">
                                          {item.name}{" "}
                                          <span className="font-medium">
                                            ({item.from.slice(0, 4)}-
                                            {item.to.slice(0, 4)})
                                          </span>{" "}
                                        </h1>{" "}
                                      </Link>

                                      <span className="ml-5 tracking-wider font-semibold">
                                        {item.designation}
                                      </span>
                                      <span className="ml-5 text-sm">
                                        {item.summary.data}
                                      </span>
                                    </div>
                                  )}
                                </>
                              ))}
                            </div>
                          )}
                        </>
                      )}
                    </div>
</div>



<div
                      className={`h-[95%] w-[35%] bg-sky-200 absolute left-10 rounded-b-full p-5 z-10`}
                    >
                      <img
                        src="https://randomuser.me/api/portraits/men/40.jpg"
                        alt=""
                        className="rounded-full h-40 mb-5 mx-auto"
                      />
                      <>
                        <div className="flex">
                          <span>
                            <img
                              src="https://www.freeiconspng.com/uploads/contact-methods-phone-icon-512x512-pixel-3.png"
                              className="w-5 h-5"
                            />
                          </span>
                          <h1 className="mx-4">{details.personal.phone}</h1>
                        </div>
                        <div className="flex my-1">
                          <span>
                            <img
                              src="https://www.freeiconspng.com/uploads/black-mail-icon-4.png"
                              className="w-7 h-7"
                            />
                          </span>
                          <h1 className="mx-2">{details.personal.email}</h1>
                        </div>
                        {details.social.map((item) => (
                          <>
                            {item.enabled == true && (
                              <div className="my-3 flex" key={item.network}>
                                <span>
                                  <img
                                    src={
                                      "https://www." +
                                      item.network +
                                      ".com/favicon.ico"
                                    }
                                    alt=""
                                    srcset=""
                                    className="w-5 grayscale-[40%]"
                                  />
                                </span>

                                <Link href={item.url}>
                                  <span className="mx-4">{item.username}</span>
                                </Link>
                              </div>
                            )}
                          </>
                        ))}
                      </>
                      {details.skills.length != 0 && (
                        <>
                          {details.skills.filter((skills) => skills.enabled)
                            .length > 0 && (
                            <>
                              <h1 className="text-2xl font-semibold tracking-[2px] mt-5 heading">
                                SKILLS
                              </h1>

                              <div className="my-2">
                                {details.skills.map((item) => (
                                  <>
                                    {item.enabled == true && (
                                      <div className="flex" key={item.name}>
                                        <h1 className="">{item.name}</h1>
                                        <p className="absolute right-5">
                                          {item.level}
                                        </p>
                                      </div>
                                    )}
                                  </>
                                ))}
                              </div>
                            </>
                          )}
                        </>
                      )}
                      {details.languages.length != 0 && (
                        <>
                          {details.languages.filter(
                            (languages) => languages.enabled
                          ).length > 0 && (
                            <>
                              <h1 className="text-2xl font-semibold tracking-[2px] mt-5 heading">
                                LANGUAGES
                              </h1>
                              <div className="my-2">
                                {details.languages.map((item) => (
                                  <>
                                    {item.enabled == true && (
                                      <div className="flex" key={item.name}>
                                        <h1 className="">{item.name}</h1>
                                      </div>
                                    )}
                                  </>
                                ))}
                              </div>
                            </>
                          )}
                        </>
                      )}
                      {details.hobbies.length != 0 && (
                        <>
                          {details.hobbies.filter((hobbies) => hobbies.enabled)
                            .length > 0 && (
                            <>
                              <h1 className="text-2xl font-semibold tracking-[2px] mt-5 heading">
                                HOBBIES
                              </h1>
                              <div className="my-2">
                                {details.hobbies.map((item) => (
                                  <>
                                    {item.enabled == true && (
                                      <div className="flex" key={item.name}>
                                        <h1 className="">{item.name}</h1>
                                      </div>
                                    )}
                                  </>
                                ))}
                              </div>
                            </>
                          )}
                        </>
                      )}
                      {details.awards.length != 0 && (
                        <>
                          {details.awards.filter((awards) => awards.enabled)
                            .length > 0 && (
                            <>
                              <h1 className="text-2xl font-semibold tracking-[2px] mt-5 heading">
                                AWARDS
                              </h1>
                              <div className="my-2">
                                {details.awards.map((item) => (
                                  <>
                                    {item.enabled == true && (
                                      <div className="flex" key={item.name}>
                                        <span className=" text-[15px] my-1">
                                          {item.name}{" "}
                                          <span className="">
                                            ({item.date})
                                          </span>
                                        </span>
                                      </div>
                                    )}
                                  </>
                                ))}
                              </div>
                            </>
                          )}
                        </>
                      )}
                      {/* <div className="mt-4">
            <h1 className="text-2xl font-semibold tracking-[2px]">HOBBIES</h1>
            {details.hobbies.map((item) => (
              <p className="my-2">{item.name}</p>
            ))}
          </div> */}
                      {details.certifications.length != 0 && (
                        <>
                          {details.certifications.filter(
                            (certifications) => certifications.enabled
                          ).length > 0 && (
                            <div className="mt-4">
                              <h1 className="text-2xl font-semibold tracking-[2px] heading">
                                CERTIFICATIONS
                              </h1>
                              {details.certifications.map((item) => (
                                <>
                                  {item.enabled == true && (
                                    <p className="my-2" key={item.name}>
                                      {item.title}
                                    </p>
                                  )}
                                </>
                              ))}
                            </div>
                          )}
                        </>
                      )}
</div>
<div
                      className={`w-[100%] h-36 bg-sky-100 top-10 relative z-1 rounded-l-full  p-10`}
                    >
                      <h1 className="text-3xl ml-[50%] font-bold tracking-widest">
                        {details.personal.firstName}{" "}
                        <span>{details.personal.lastName}</span>
                      </h1>
                      <h1 className="ml-[58%] my-2 tracking-widest">
                        {details.personal.role}
                      </h1>
                      <div className="absolute mt-10  left-[330px] w-[57%] h-[100%] text-black">
                        {details.personal.objective != 0 && (
                          <>
                            <h1 className="text-xl font-bold tracking-[1px] heading">
                              OBJECTIVE
                            </h1>
                            <p>{details.personal.objective}</p>
                          </>
                        )}
                        {details.education.length != 0 && (
                          <>
                            {details.education.filter(
                              (education) => education.enabled
                            ).length > 0 && (
                              <>
                                <h1 className="text-xl font-bold tracking-[1px] heading">
                                  EDUCATION
                                </h1>
                                {details.education.map((item) => (
                                  <>
                                    {item.enabled == true && (
                                      <div
                                        className="mt-4"
                                        key={item.institution}
                                      >
                                        <h1 className="font-semibold">
                                          {item.institution}{" "}
                                          <span className="font-medium">
                                            ({item.startDate.slice(0, 4)}-
                                            {item.endDate.slice(0, 4)})
                                          </span>{" "}
                                        </h1>
                                        <p className="ml-5">
                                          {item.typeOfDegree}
                                        </p>
                                        <p className="ml-5 my-1">
                                          {item.summary.data}
                                        </p>
                                        <p className="ml-5">GPA-{item.gpa}</p>
                                      </div>
                                    )}
                                  </>
                                ))}
                              </>
                            )}
                          </>
                        )}

                        {details.work.length != 0 && (
                          <>
                            {details.work.filter((work) => work.enabled)
                              .length > 0 && (
                              <>
                                <h1 className="text-xl font-bold tracking-[1px] mt-4 heading">
                                  WORK
                                </h1>
                                {details.work.map((item) => (
                                  <>
                                    {item.enabled == true && (
                                      <div className="mt-4" key={item.company}>
                                        <h1 className="font-semibold">
                                          {item.company}{" "}
                                          <span className="font-medium">
                                            ({item.from.slice(0, 4)}-
                                            {item.to.slice(0, 4)})
                                          </span>{" "}
                                        </h1>

                                        <span className="ml-5 tracking-wider font-semibold">
                                          {item.designation}
                                        </span>
                                        <span className="ml-5 text-sm">
                                          {item.summary.data}
                                        </span>
                                      </div>
                                    )}
                                  </>
                                ))}
                              </>
                            )}
                          </>
                        )}
                        {details.projects.length != 0 && (
                          <>
                            {details.projects.filter(
                              (projects) => projects.enabled
                            ).length > 0 && (
                              <div>
                                <h1 className="text-xl font-bold tracking-[1px] mt-4 heading">
                                  PROJECTS
                                </h1>
                                {details.projects.map((item) => (
                                  <>
                                    {item.enabled == true && (
                                      <div className="mt-4" key={item.name}>
                                        <Link href={item.website}>
                                          <h1 className="font-semibold">
                                            {item.name}{" "}
                                            <span className="font-medium">
                                              ({item.from.slice(0, 4)}-
                                              {item.to.slice(0, 4)})
                                            </span>{" "}
                                          </h1>{" "}
                                        </Link>

                                        <span className="ml-5 tracking-wider font-semibold">
                                          {item.designation}
                                        </span>
                                        <span className="ml-5 text-sm">
                                          {item.summary.data}
                                        </span>
                                      </div>
                                    )}
                                  </>
                                ))}
                              </div>
                            )}
                          </>
                        )}
                      </div>
</div>