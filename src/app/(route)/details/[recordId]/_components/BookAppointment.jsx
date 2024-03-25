import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { useEffect, useState } from "react";
import { DialogClose } from "@radix-ui/react-dialog";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import GlobalApi from "@/app/_utils/GlobalApi";
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"

const BookAppointment = ({ doctor }) => {
  const [date, setDate] = useState(new Date());
  const [timeSlot, settimeSlot] = useState();
  const [selectedTimeSlot, setselectedTimeSlot] = useState(null);
  const [notes, setnotes] = useState('')

  const { user } = useKindeBrowserClient();

  useEffect(() => {
    getTime();
  }, []);

  const getTime = () => {
    const timeList = [];

    // First loop for 10 AM to 12 PM
    for (let i = 10; i <= 12; i++) {
      timeList.push({
        time: i + ":00 AM",
      });
      timeList.push({
        time: i + ":30 AM",
      });
    }

    // Second loop for 1 PM to 6:30 PM
    for (let i = 1; i <= 6; i++) {
      timeList.push({
        time: i + ":00 PM",
      });
      if (i < 6) {
        timeList.push({
          time: i + ":30 PM",
        });
      }
    }

    settimeSlot(timeList); // Assuming settimeSlot is a defined function
  };

  // const isPastDay = (day) => {
  //   return day < new Date();
  // };

  const saveBooking = () => {
    const data = {
      data: {
        UserName: user.given_name + " " + user.family_name ,
        Email: user.email,
        Date: date,
        Time: selectedTimeSlot,
        doctor: doctor.id,
        Notes:notes
      },
    };
    console.log(data);
    GlobalApi.bookAppointment(data).then((res) => {
      console.log(res);
      if(res){
        GlobalApi.sendEmail(data).then((res)=>{
          console.log(res);
        })
        toast("Booking confirmation will be send via mail..")
      }
    });
  };

  return (
    <div>
      <Dialog className="">
        <DialogTrigger>
          <Button className=" mt-2">Book Appointment</Button>
        </DialogTrigger>
        <DialogContent className="">
          <DialogHeader className="">
            <DialogTitle className="">Book Appointment</DialogTitle>
            {/* <pre>{JSON.stringify(selectedTimeSlot)}</pre> */}
            <DialogDescription>
              <div className=" grid sm:grid-cols-2">
                <div className="rounded-md border m-3">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    // disabled={isPastDay}
                    className=" "
                  />
                </div>
                <div className="grid grid-cols-3 gap-2 p-5 border rounded-md m-3">
                  {timeSlot &&
                    timeSlot.map((item, index) => (
                      <p
                        onClick={() => {
                          setselectedTimeSlot(item.time);
                        }}
                        key={index}
                        className={` ${
                          selectedTimeSlot == item.time && "bg-primary text-white"
                        }  border rounded-lg p-1 flex items-center justify-center hover:text-white hover:bg-primary transition-all ease-in-out cursor-pointer`}
                      >
                        {item.time}
                      </p>
                    ))}
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
          <div className=" mx-3">
            <textarea
            onChange={(e)=>{setnotes(e.target.value)}}
              name=""
              id=""
              value={notes}
              placeholder="Add notes here..."
              cols="30"
              rows="2"
              className="w-full outline-grey border-2 p-3  rounded-lg"
            ></textarea>
          </div>
          <DialogFooter className="sm:justify-end">
            <DialogClose asChild>
              <Button
                type="button"
                className=" bg-black hover:bg-white hover:text-black hover:outline-black border-2-black"
              >
                Close
              </Button>
            </DialogClose>
            <div>
              <Button
                type="button"
                disabled={!(date && selectedTimeSlot)}
                onClick={()=>{saveBooking()}}
              >
                Submit
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BookAppointment;
