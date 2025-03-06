
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-soft hover:shadow-medium transition-all duration-300">
      <h3 className="text-2xl font-semibold mb-6 text-gray-900">Contact Information</h3>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="w-10 h-10 bg-sunrise-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
            <MapPin className="text-sunrise-600 h-5 w-5" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Nigeria Office:</h4>
            <p className="text-gray-700">
              Sunrise New Energy Technology Co.Ltd<br />
              No. 9, Magajin Rumfa Left Of Residence Sixteen,<br />
              Nassarawa/Gra, Kano State, Nigeria
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="w-10 h-10 bg-sunrise-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
            <MapPin className="text-sunrise-600 h-5 w-5" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">China Office:</h4>
            <p className="text-gray-700">
              Shandong Longguang Tianxu Solar Energy Co., Ltd.<br />
              489 Beihuan Road, Zhucheng, Weifang City,<br />
              Shandong Province, China
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="w-10 h-10 bg-sunrise-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
            <Phone className="text-sunrise-600 h-5 w-5" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Phone Numbers:</h4>
            <p className="text-gray-700">
              Tel: +86 15964341134<br />
              WeChat/WhatsApp: +86 18310008190
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="w-10 h-10 bg-sunrise-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
            <Mail className="text-sunrise-600 h-5 w-5" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Email:</h4>
            <p className="text-gray-700">erin.xing@foxmail.com</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-semibold mb-4 text-gray-900">Our Service Commitment</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <span className="block text-sunrise-600 font-semibold">Efficient</span>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <span className="block text-green-600 font-semibold">Green</span>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <span className="block text-blue-600 font-semibold">Energy Saving</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
