import omg from './../../assets/image.png'
export default function Card({id,title,author_title,tarikh,image}) {
    const newDate=new Date(tarikh)
    const formatDate=newDate.toLocaleDateString("fa-IR")
  return (
    <div className="w-[95%] h-[500px] border-[1px] border-gray-300 rounded-2xl  ">
      <a className="h-full " href="">
        <div className="w-[90%] h-full  m-auto flex flex-col">
          <div>
          <img className=" m-auto mt-3 w-full h-[300px] bg-cover"  src={omg} alt="image_title" />
          <span className=" bg-blue-100 p-2 inline-block rounded text-white w-[150px] mt-4 mb-4">
            <h1 className="text-sm font-medium text-[#4B6BFB] text-center ">Technology</h1>
          </span>
          </div>
          <h1 className="font-bold">
          {title}
          </h1>
          <div className="w-full flex items-center mt-auto pb-4 justify-between ">
            <span className="flex items-center">
              <img className="w-5 h-5 rounded-3xl" src={omg} alt="" />
              <p className="ml-1.5 text-gray-400">{author_title}</p>
            </span>
            <p className="text-gray-400">
              {formatDate}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}
