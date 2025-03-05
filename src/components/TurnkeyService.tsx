
const TurnkeyService = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">TURNKEY SERVICE</h2>
        <div className="w-20 h-1 bg-sunrise-500 mx-auto mb-6"></div>
      </div>
      
      <div className="bg-white p-8 rounded-lg shadow-soft">
        <div className="mb-8">
          <img 
            src="/public/lovable-uploads/fa703336-104b-4e05-a641-4ee75408c77b.png" 
            alt="Turnkey Service Process" 
            className="mx-auto max-w-full h-auto"
          />
        </div>
        
        <div className="prose max-w-none text-gray-700">
          <p className="mb-4">
            SUNRISE is your ultimate partner in providing full turnkey solar power solutions. From initial site surveys and feasibility reports to design, production of solar supplies, installation, commissioning, and maintenance of Solar Power Plants, we offer an end-to-end service. Our commitment to delivering world-class solar technology, coupled with the expertise of our experienced delivery partners, ensures affordable, clean, and reliable solar energy solutions.
          </p>
          <p className="mb-4">
            With extensive experience in both on-grid and off-grid solar installations, quality assurance is ingrained in every aspect of our business. Our highly skilled Engineering, Procurement, and Construction (EPC) team ensures seamless execution of each solar project, from concept to commissioning. We provide comprehensive training to ensure a smooth handover at the completion of the contract.
          </p>
          <p>
            Monitoring and reporting are crucial aspects of our services. We offer real-time and historical data, performance-based alerts, and web-based monitoring systems, providing our clients with valuable insights and control over their solar power plants.
          </p>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <ul className="space-y-2">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-sunrise-500 rounded-full mr-2"></div>
                <span>One stop solution</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-sunrise-500 rounded-full mr-2"></div>
                <span>Reduced Fuel Consumption</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-sunrise-500 rounded-full mr-2"></div>
                <span>Reduced Total Cost of Ownership</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <ul className="space-y-2">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-sunrise-500 rounded-full mr-2"></div>
                <span>Automatic Power Management</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-sunrise-500 rounded-full mr-2"></div>
                <span>Access to clean energy</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-sunrise-500 rounded-full mr-2"></div>
                <span>Professional maintenance and support</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TurnkeyService;
