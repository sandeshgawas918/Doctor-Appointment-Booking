'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BookingList from "./_components/BookingList"
import GlobalApi from "@/app/_utils/GlobalApi"
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"
import { useEffect, useState } from "react"


const MyBooking = () => {

    const cancelBooking=(id)=>{
        id && GlobalApi.deleteBooking(id).then((res)=>{
        })
    }

    const [bookingList, setbookingList] = useState(null)

    const { user } = useKindeBrowserClient()

    useEffect(() => {
        user && getUserBookingList()
    }, [user,cancelBooking])

    const getUserBookingList = () => {
        GlobalApi.getUserBookingList(user.email).then((res) => {
            setbookingList(res.data.data);
        })
    }

    const FilteredBooking = (type) => {
        let result = bookingList.filter((item) => {
            return type == 'upcoming' ? new Date(item.attributes.Date) >= new Date() : new Date(item.attributes.Date) <= new Date()
        })    
        return result
    }

    return (
        <div className='p-3 mt-3'>
            <h1 className=' text-3xl font-bold'>My Bookings</h1>
            <Tabs defaultValue="upcoming" className="w-full mt-5">
                <TabsList className=" w-full justify-start">
                    <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                    <TabsTrigger value="expired">Expired</TabsTrigger>
                </TabsList>
                <TabsContent value="upcoming"><BookingList cancelBooking={cancelBooking} expired={false} BookingList={bookingList && FilteredBooking('upcoming')} /></TabsContent>
                <TabsContent value="expired"><BookingList cancelBooking={cancelBooking} expired={true} BookingList={bookingList && FilteredBooking('expired')} /></TabsContent>
            </Tabs>

        </div>
    )
}

export default MyBooking