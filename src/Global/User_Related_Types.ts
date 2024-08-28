
export type User_Name = {
    f_name: string
    m_name: string
    l_name: string
    _id?: string
}

export type Contact = {
    phone: string
    address: string
    _id?: string
}


export type My_Profile_Data_Type = {
    name: User_Name
    blood_group: string
    email: string
    password: string
    contact: Contact
    profile_image: string
    status: string
    role: string
    gender: string
    _id: string
    createdAt: string
    updatedAt: string
    __v: number
    id: string
}

export type Token_Decode_User_Type = {
    email: string,
    role: 'Donor' | 'Requester' | 'Admin' | 'Both',
    exp: number,
    iat: number,
}