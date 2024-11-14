function temp_logIn() {
    return /*html*/`
        <div class="form-headline">
            <h1>Log in</h1>
            <div class="w-100">
                <div class="seperator"> </div>
            </div>
        </div>

        <form id="logInForm" class="logIn-form" onsubmit="userLogIn(event)"> <!-- delete id?, class-->

            <div class="input-icon">
                <img src="./assets/img/input_mail_icon.svg">
                <input type="email" id="inpMail" name="email" placeholder="Email" required autocomplete="off">
            </div>

            <div class="input-icon">
                <input type="password" id="inpPass" name="password" placeholder="Password" required autocomplete="off">
                <img id="lockIcon" src="./assets/img/lock.svg">
                <img onclick="changeType('inpPass', 'open')" class="eyeIcons" id="closeEye" src="./assets/img/closeEye.svg">
                <img onclick="changeType('inpPass', 'close')" class="eyeIcons hidden" id="openEye" src="./assets/img/openEye.svg">
                <p id="wrongMessageMail" class="message-wrong-passwords">Check your email and password. Please try again.</p>           
            </div>

            <div class="checkbox-container">
                <input type="checkbox" class="custom-checkbox" id="rememberCheckbox">
                <label for="myCheckbox">Remember me</label>
            </div>

            <div class="form-buttons-container">
                <button type="submit" class="button-dark">Log in</button>
                <button onclick="guestLogIn()" type="button">Guest Log in</button>
            </div>

        </form>
    `
}

function temp_singUp() {
    return /*html*/`
        <div class="form-headline">
            <div class="return-container">
                <div class="return-button" onclick="returnButton()">
                    <img src="./assets/img/vector_blue.svg">
                </div>
            </div>
            <h1>Sign up</h1>
            <div class="w-100">
                <div class="seperator"> </div>
            </div>
        </div>

       

        <form class="form-singUp" onsubmit="addUser(event)" oninput="toggleSubmitButton()">
        <!-- <form onsubmit="addUser(); return false"> -->

            <div class="input-icon">
                <img src="./assets/img/person.svg">
                <input type="text" id="inpName" name="name" placeholder="Name" required autocomplete="off">
            </div>
            <!--
            <div class="input-name-container">
                <input required class="input-name" placeholder="Name" id="name" autocomplete="off">
                <img src="./assets/img/person.svg">
            </div>
            -->


            <div class="input-icon">
                <img src="./assets/img/input_mail_icon.svg">
                <input type="email" id="inpMail" name="email" placeholder="Email" required autocomplete="off">
                <p class="message-wrong-passwords" id="wrongMessageMail">Email already exists !</p>
            </div>
            <!-- <div class="input-email-message-container">
                <div class="input-email-container">
                    <input required class="input-email" placeholder="Email" id="email" autocomplete="off">
                    <img src="./assets/img/mail.svg">
                </div>
                <p class="message-email-exist d-none" id="message-email-exist-p">Email already exists !</p>
            </div> -->



            <div class="input-icon">
                <input type="password" id="inpPass" name="password" placeholder="Password" required autocomplete="off">
                <img id="lockIcon" src="./assets/img/lock.svg">
                <img onclick="changeType('inpPass', 'open')" class="eyeIcons" id="closeEye" src="./assets/img/closeEye.svg">
                <img onclick="changeType('inpPass', 'close')" class="eyeIcons hidden" id="openEye" src="./assets/img/openEye.svg">
            </div>
            <!-- <div class="input-password-container">
                <input required type="password" class="input-password" placeholder="Password" id="passwordInput" onfocus="changeImageWhenClickInputfield()">
                <img src="./assets/img/lock.svg" id="lockImage" onclick="changeImage()">
            </div> -->




            <div class="input-icon">
                <input type="password" id="inpPassConfirm" name="Confirmpassword" placeholder="Confirm Password" required autocomplete="off">
                <img id="lockIconConfirm" src="./assets/img/lock.svg">
                <img onclick="changeType('inpPassConfirm', 'open')" class="eyeIcons" id="closeEyeConfirm" src="./assets/img/closeEye.svg">
                <img onclick="changeType('inpPassConfirm', 'close')" class="eyeIcons hidden" id="openEyeConfirm" src="./assets/img/openEye.svg">
                <p id="wrongMessagePass" class="message-wrong-passwords">Your passwords don't match. Please try again.</p>
            </div>
            <!--
            <div class="input-confirm-password-message-container">
                <div class="input-confirm-password">
                    <input required type="password" class="input-confirm-password" placeholder="Confirm Password"
                        id="confirmPasswordInput" onfocus="changeConfirmImageWhenClickInputfield()">
                    <img src="./assets/img/lock.svg" id="confirmLockImage" onclick="changeConfirmImage()">
                </div>
                <p class="message-wrong-password d-none" id="message-wrong-password-p">Your passwords don't match.
                    Please try again.</p>
            </div>
            -->




            <div class="checkbox-container singUp-box">
                <input type="checkbox" class="custom-checkbox" id="rememberCheckbox" required>
                <label class="w-200" for="myCheckbox">I accept the <a class="checkbox-link" href="./privacyPolicy.html" target="_blank">Privacy policy</a></label>
            </div>
            <!-- <div class="checkbox-container">
                <input type="checkbox" id="agreeCheckbox" onchange="checkIfCheckboxChecked()">
                <p>I accept the <a href="./privacyPolicy.html" target="_blank">Privacy policy</a></p>
            </div> -->


            <div class="form-buttons-container">
                <button type="submit" id="signUpButton" class="button-dark" disabled>Sign up</button>
            </div>

        </form>
    `
}
