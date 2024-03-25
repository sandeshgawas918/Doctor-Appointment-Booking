import GlobalApi from "@/app/_utils/GlobalApi";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

const CancelAppointment = ({id,cancelBooking}) => {

  return (
    <AlertDialog>
      <AlertDialogTrigger className=" w-[120px]"><Button className=" text-[12px] px-1 m-0">Cancel Appointment </Button></AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={()=>{cancelBooking(id)}} >Continue</AlertDialogAction>
        </AlertDialogFooter> 
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CancelAppointment;
