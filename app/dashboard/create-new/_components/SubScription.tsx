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
} from "@/components/ui/alert-dialog"

export function Subscription({isOpen, setIsOpen}){
    return(
     <div>
            <AlertDialog open={isOpen}>
  <AlertDialogContent className="bg-white">
    <AlertDialogHeader>
      <AlertDialogTitle className="text-black">Sorry For Interruption</AlertDialogTitle>
      <AlertDialogDescription className="text-black">
        The Subscriptions Of AI models is Ended. Wait Until Admin Make Payment.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel className="btn-primary" onClick={()=> setIsOpen(false)}>Cancel</AlertDialogCancel>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog> 
        </div> 
    )
}