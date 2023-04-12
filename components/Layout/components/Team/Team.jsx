import React from 'react'
import TeamMember from './components/TeamMember'

export default function Team() {
    const teamMember = [
        {
            id: 1,
            name: 'Rio Ardhityo',
            skill: 'Product Maker',
            desc: 'Hi, bersama coder indonesia saya membuat berbagai macam produk untuk membantu komunitas belajar koding di indonesia lebih efektif & mudah.',
            social: 'rio-ardhityo-40333712b',
            image: 'img/rio_profile.jpeg'
        },
        {
            id: 2,
            name: 'Tubagus Fikri Fantoni',
            skill: 'Back-End Developer',
            desc: 'Saya bersama coder indonesia ingin memastikan setiap client saat menggunakan produk kami dapat berfungsi secara maksimal.',
            social: 'tbfikrif',
            image: 'img/tubagus.jpg'
        },
        {
            id: 3,
            name: 'Wawa Nurazizah',
            skill: 'UI & UX Designer',
            desc: 'Hello, saya bersama teman2 Coder indonesia ingin memberikan pengalaman menggunakan produk kami senyaman dan semudah mungkin.',
            social: 'wawa-nurazizah-a14ba9153',
            image: 'img/wawa.jpg'
        },
        {
            id: 4,
            name: 'Irwan Marga',
            skill: 'Devops',
            desc: 'Saya memastikan setiap proses development diproduk kami dapat dideliver secepat mungkin.',
            social: 'irwan-marga-nurfitri-herwanto-78bb1b193',
            image: 'img/irwan.jpg'
        },
        {
            id: 5,
            name: 'Rendi Erwinsah',
            skill: 'Community management',
            desc: 'Halo semua saya bertanggung jawab untuk memastikan setiap pembelajaran yang kami sediakan dapat dinikmati setiap orang.',
            social: '-',
            image: 'img/rendi.png'
        },
        {
            id: 6,
            name: 'Rizky Firdaus',
            skill: 'Front End Developer',
            desc: 'Hi saya bertanggung jawab untuk mengimplementasikan tampilan dari produk kami untuk anda.',
            social: 'rizky-firdaus-68567a132',
            image: 'img/rizky.png'
        },
        // {
        //     id: 7,
        //     name: 'Member 7',
        //     skill: 'Web Developer',
        //     desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur',
        //     social: '@depripramana',
        //     image: 'img/man-1.jpg'
        // },
        // {
        //     id: 8,
        //     name: 'Member 8',
        //     skill: 'DevOps and UI Design',
        //     desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur',
        //     social: '@dedydarisman',
        //     image: 'img/man-1.jpg'
        // }

    ];
    return (
        <React.Fragment>
            <section className="py-5" id="team">
                <div className="container">
                    <div className="wow fadeIn">
                        <h2 className="h1 h1-responsive text-center my-5">Tim Kami</h2>
                        {/* <p className="px-5 mb-5 pb-3 lead text-center blue-grey-text">
                            Find a mentor who is experienced and learn directly from them.
                        </p> */}
                    </div>
                    <div className="row mb-lg-4 text-center text-md-left">
                        <TeamMember team={teamMember} />
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
