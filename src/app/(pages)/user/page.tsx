import UserAvatarsGrid from "@/components/UserAvatarsGrid";

export default function User(){
    return(
        <>
           <section className="s_wd_users relative w-full overflow-hidden bg-white py-8 md:py-16">
                 <div className="container relative min-h-[800px] flex text-center items-center justify-content-center isolation-auto">
                   
                   {/* Background Decorative Mosaic Grid */}
                   <UserAvatarsGrid/>
                </div>
            </section>
        </>
    );
}