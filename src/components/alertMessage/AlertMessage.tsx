import React from 'react'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../ui/alert-dialog'

type Props = {
    alertButtonTriggerText: string;
    title: string;
    message: string;
    cancelButtonText: string;
    dialogActionText: string;
}

const AlertMessage = (props: Props) => {
  return (
    <div>
        <AlertDialog>
          <AlertDialogTrigger>
            <button>{props.alertButtonTriggerText}</button>
          </AlertDialogTrigger>
          <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
                {props.title}
            </AlertDialogTitle>
            <AlertDialogDescription>
                {props.message}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>
                {props.cancelButtonText}
            </AlertDialogCancel>
            <AlertDialogAction>
                {props.dialogActionText}
            </AlertDialogAction>
          </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
    </div>
  )
}

export default AlertMessage