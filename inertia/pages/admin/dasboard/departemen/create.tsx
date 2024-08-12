// import React, { FormEventHandler, Fragment, useState } from 'react'
// import Admin from '~/layout/admin'
// import {
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
// } from "@/components/ui/alert-dialog";
// import { Label } from '~/components/ui/label';
// import { Input } from '~/components/ui/input';
// import { useForm } from '@inertiajs/react';
// import Swal from 'sweetalert2';
// import { Button } from '~/components/ui/button';
// export default function Create() {
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const handleCloseDialog = () => {
//     setIsDialogOpen(false);
// };

//   const { data, setData, post, processing } = useForm({
//     namaDepartemen: '',
//     namaPegawai: ''
//   });

//   const handleSubmit: FormEventHandler = (e) => {
//     e.preventDefault();
//     post('/dasboard/departemen/create', {
//       onSuccess: () => {
//         Swal.fire({
//           title: 'Data Berhasil Ditambahkan!',
//           icon: 'success',
//           confirmButtonText: 'Okee',
//         })
//       },
//     });
//   };

//   return (
//     <Fragment>
    
//     </Fragment>
//   )
// }
