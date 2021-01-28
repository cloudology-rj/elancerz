import React, {useEffect, useContext} from 'react'
import {useRouter} from 'next/router'
import SettingsComponent from 'components/settings'
import {IsMobileContext} from 'components/Context/IsMobile'

const Settings = () => {
    const router = useRouter()
    const [isMobile] = useContext(IsMobileContext)


    
    useEffect(() => {
        if (!isMobile){
            router.push('/settings/account-information')
        }
    }, [isMobile])
    return (
        <>
        {isMobile && (
            <SettingsComponent/>
        )}
        </>
    )
}

export default Settings
