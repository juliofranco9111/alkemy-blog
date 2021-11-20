import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { DetailsPage } from '../pages/DetailsPage'
import { ErrorPage } from '../pages/ErrorPage'
import { FormPostPage } from '../pages/FormPostPage'
import { HomePage } from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'

export const Router = () => {
    return (
        <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='login' element={<LoginPage />} />
      <Route path='post/:id' element={<DetailsPage />} />
      <Route path='post/create' element={<FormPostPage />} />
      <Route path='post/edit/:id' element={<FormPostPage />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
    )
}
