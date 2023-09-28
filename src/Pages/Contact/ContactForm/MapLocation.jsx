const MapLocation = () => {
  return (
    <div className="w-full md:w-full h-[300px] sm:h-[450px]">
      <iframe
        title="google-maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.86600478907!2d90.25446801116419!3d23.780863188122776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1688316280405!5m2!1sen!2sbd"
        className="border-0 w-full h-full"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapLocation;
