import CallCenter from "../../assets/call-center 1.png"
function ChoProperty() {
  return (
    <div className='choProperty bg-white absolute top-[30%] right-[3%] h-[381px] max-w-[240px] rounded-[8px] p-[15px]'>
      <div className="flex justify-center"><img className="w-[109px]" src={CallCenter} alt="call-center" /></div>
      <p className="text-[16px] mb-[16px]">Sizin için doğru mülkü seçmenize yardımcı olacağız</p>
      <p className="text-[13px] mb-[16px]">Formu tercihlerinizle doldurun, satış ekibimiz sizin için doğru seçeneği bulacaktır</p>
      <button className="bg-[#ed6b2c] text-[#fff] p-[6px_12px] rounded-[5px] text-[14px]">Formu Doldurun</button>
    </div>
  )
}

export default ChoProperty
