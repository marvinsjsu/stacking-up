
export default function Experience() { 
    return (
        <section id="experience" className="p-8 pb-2">
            <h2 className="font-medium text-xl mb-4 md:mb-0 pt-8 pb-4 text-center md:text-left md:py-0">Experience</h2>
            <div className="py-5 pb-2 mb-5 border-b-2 border-dashed border-gray-100 text-left">
                <h4 className="text-[16px] font-medium">Lead Engineer</h4>
                <div className="flex justify-between w-full py-3 pt-1 text-primary-orange">
                    <span className="font-normal hover:underline">
                        <a href="https://arcum.ai/" target="_blank">Arcum AI</a>
                    </span>
                    <span className="block">12/23 to 09/24</span>
                </div>
                <p className="leading-extra">
                    Led the design and development of the client-facing dashboard, RevMax Studio.  Built the IRIS Integration service to fetch client data from IRIS CRM instances. Spearheaded the adoption of Agile and Scrum methodologies to improve team collaboration, project tracking, and delivery.
                </p>
                <p className="leading-extra">
                    Tech stack: Next.js (Pages Router), MongoDB Atlas, AWS SQS/Lambdas/EC2, Serverless, Jupyter Notebook
                </p>
            </div>
            
            <div className="py-5 mb-5 border-b-2 border-dashed border-gray-100">
                <h4 className="text-[16px] font-medium">Full Stack Engineer</h4>
                <div className="flex justify-between w-full py-3 pt-1">
                    <span className="text-primary-orange font-normal hover:underline">
                        <a href="https://www.nextroll.com" target="_blank">NextRoll</a>
                    </span>
                    <span className="text-primary-orange">11/19 to 09/22</span>
                </div>
                <p className="leading-extra">
                    Worked with design and product teams in updating and building user experiences
                    across the AdRoll platform.  These user experiences included Customer
                    On-boarding, Marketing Recipes, Campaign Buyflows, and Automation
                    Builder.
                </p>
                <p className="leading-extra">
                    Tech stack: React, Redux, Sass, Webpack, Flask, Postgres, AWS
                </p>
            </div>

            <div className="py-5 mb-5 border-b-2 border-dashed border-gray-100">
                <h4 className="text-[16px] font-medium">Software Engineer</h4>
                <div className="flex justify-between w-full py-3 pt-1">
                    <span className="text-primary-orange font-normal hover:underline">
                        <a href="https://www.compthree.com/" target="_blank">CompThree & Magnify Progress</a>
                    </span>
                    <span className="text-primary-orange">08/18 to 10/19</span>
                </div>
                <p className="leading-extra">
                    Worked on MVP web and mobile apps for Tobiko and Presearch projects.
                    For the Tobiko app, I worked on the admin dashboard, chat system,
                    and third-party integrations: Stripe, Twilio, and Slack.  For
                    the Presearch app, I worked on the token marketplace for
                    currency conversion and account creation funnel.
                </p>
                <p className="leading-extra">
                    Tech stack: React, React Native, Websockets, Apollo GraphQL, Graphene, Flask, ElasticSearch, AWS
                </p>
            </div>

            <div className="py-5 mb-5">
                <h4 className="text-[16px] font-medium">Software Engineer</h4>
                <div className="flex justify-between w-full py-3 pt-1">
                    <span className="text-primary-orange font-normal hover:underline">
                        <a href="https://www.sugarcrm.com/" target="_blank">SugarCRM</a>
                    </span>
                    <span className="text-primary-orange">12/14 to 08/18</span>
                </div>
                <p className="leading-extra">
                    Worked with business analyst team to design and implement solutions for internal teams on the internal Sugar instance and customer-facing applications: Partners Portal, Case Portal, and SugarExchange.
                </p>
                <p className="leading-extra">
                    Tech stack: Backbone.js, Bootstrap, PHP, Laravel, MySQL, Sugar
                </p>
            </div>  
        </section>
    );
}

