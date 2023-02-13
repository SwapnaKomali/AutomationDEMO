class Orangefrmcalender{

public get userName(){
    return $("//input[@class='oxd-input oxd-input--active']")
}

public get password(){

    return $("//input[@type='password']")
}

public get Login(){
return $("//button[@type='submit']")
}

public get time(){
    return $("//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name']")
}

public get attandance(){
    return $("//span[@class='oxd-topbar-body-nav-tab-item']")
}
public get Myrecords(){
    return $("//a[@role='menuitem']")
}

}