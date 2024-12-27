import React from "react";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import PublicIcon from '@mui/icons-material/Public';
import '../index.css'

const Contact = () => {
    return (
        <>
            <div class="flex">
                <div class="flex-1 p-6">
                    <div class="max-w-4xl mx-auto">
                        <h1 class="text-5xl font-bold mb-6 text-[--my-black]">Contact Us</h1>
                        <p class="text-[--my-gray] mb-6 text-xl">
                            We'd love to hear from you! Whether you have a question, a comment, or just want to say hello, feel free to reach out.
                        </p>

                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div class="ml-8">
                                <h2 class="text-xl font-semibold text-gray-800 mb-4">Reach Us At</h2>
                                <ul class="space-y-4">
                                    <li class="flex items-center">
                                        {/* <span class="material-icons text-purple-600 mr-2">email</span> */}
                                        <EmailIcon style={{color:'var(--my-violet)'}} />
                                        <a href="mailto:mythoquantum@gmail.com" class="text-[--my-gray] hover:underline ml-2 text-lg">
                                            mythoquantum@gmail.com
                                        </a>
                                    </li>
                                    <li class="flex items-center">
                                        {/* <span class="material-icons text-purple-600 mr-2">phone</span> */}
                                        <PhoneIcon style={{color:'var(--my-violet)'}} />
                                        <a href="tel:+918228884343" class="text-[--my-gray] hover:underline ml-2 text-lg">+91 82288 84343</a>
                                    </li>
                                    <li class="flex items-center">
                                        {/* <span class="material-icons text-purple-600 mr-2">language</span> */}
                                        <PublicIcon style={{color:'var(--my-violet)'}} />
                                        <a href="https://mythoquantum.com" target="_blank" class="text-[--my-gray] hover:underline ml-2 text-lg">
                                            mythoquantum.com
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;