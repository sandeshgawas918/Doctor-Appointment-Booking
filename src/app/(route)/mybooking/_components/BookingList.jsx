import { Button } from "@/components/ui/button";
import { CalendarCheck, MapPin, TimerIcon } from "lucide-react";
import moment from "moment/moment";
import Image from "next/image";
import CancelAppointment from "./CancelAppointment";

const BookingList = ({ BookingList, expired, cancelBooking }) => {
  return (
    <div>
      {BookingList &&
        BookingList.map((item, index) => (
          <div key={index} className="p-3 border my-4 rounded-lg">
            <div className=" flex flex-row gap-4 items-center">
              <div>
                <Image
                  src={
                    item.attributes.doctor.data.attributes.Image.data.attributes
                      .url
                  }
                  width={500}
                  height={500}
                  alt="doctor"
                  className="h-[70px] sm:h-[90px] w-[100px] object-cover rounded-full"
                />
              </div>
              <div className="w-full flex flex-col">
                <h2 className=" text-[13px] sm:text-xl font-bold flex flex-row justify-between items-center">
                  <h2>{item.attributes.doctor.data.attributes.Name}</h2>
                  {!expired && <CancelAppointment id={item.id} cancelBooking={cancelBooking}/> }
                </h2>
                <h2 className="text-[12px] sm:text-xl text-gray-500 flex flex-row gap-2 mt-1">
                  <MapPin className=" text-purple-700" />
                  {item.attributes.doctor.data.attributes.Address}
                </h2>
                <h2 className="text-[12px] sm:text-xl font-semibold flex flex-row gap-2 mt-3">
                  <CalendarCheck className=" text-purple-700" />
                  Appointment Date : {moment(item.attributes.Date).format('DD-MMM-YYYY')}
                </h2>
                <h2 className="text-[12px] sm:text-xl font-semibold flex flex-row gap-2 mt-3">
                  <TimerIcon className=" text-purple-700" />
                  Appointment Time : {item.attributes.Time}
                </h2>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default BookingList;
