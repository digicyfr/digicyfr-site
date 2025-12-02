interface CaseStudy {
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
}

interface ServiceCaseStudiesProps {
  title: string;
  studies: CaseStudy[];
}

export default function ServiceCaseStudies({ title, studies }: ServiceCaseStudiesProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-gray-600">
            See how we've helped businesses achieve their goals
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {studies.map((study, index) => (
            <div
              key={index}
              className="overflow-hidden bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
                    {study.industry}
                  </span>
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  {study.client}
                </h3>
                <div className="mb-4">
                  <h4 className="mb-2 font-semibold text-gray-700">Challenge</h4>
                  <p className="text-gray-600">{study.challenge}</p>
                </div>
                <div className="mb-4">
                  <h4 className="mb-2 font-semibold text-gray-700">Solution</h4>
                  <p className="text-gray-600">{study.solution}</p>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-gray-700">Results</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-start text-gray-600">
                        <svg
                          className="w-5 h-5 mr-2 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}