import React from 'react';

function Info() {
  return (
    <div className="bg-secondary rounded-2xl w-full lg:w-1/2 p-6 sm:p-8 flex flex-col">
      <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] leading-tight mb-4 sm:mb-6">
        Contact Info
      </h2>

      <div className="space-y-4 sm:space-y-6">
        <div className="flex flex-col font-light">
          <span className="font-bold text-lg">Tel:</span>
          <span>+233 (0) 302 768 899</span>
          <span>+233 (0) 244 887 744</span>
        </div>

        <div className="flex gap-1 items-center">
          <span className="font-bold text-lg">Email:</span>
          <span className="font-light">info@alabastergh.com |</span>
          <span className="font-light">sales@alabastergh.com</span>
        </div>

        <div className="flex gap-1 items-center">
          <span className="font-bold text-lg">Office Location:</span>
          <span className="font-light">
            Polo Court, Liberation Road, Accra
          </span>
        </div>

        <div className="mt-4 sm:mt-6 aspect-video rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.666498189222!2d-0.17791992370661844!3d5.616166794364841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b10f62ca0d1%3A0xffad64a9769e94aa!2sAlabaster%20Car%20Rentals%20and%20Tours%20Ltd!5e0!3m2!1sen!2sgh!4v1745503179033!5m2!1sen!2sgh"
            width="100%"
            height="100%"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}

export default Info;
