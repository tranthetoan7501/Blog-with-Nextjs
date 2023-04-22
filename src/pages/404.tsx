/* eslint-disable @next/next/no-img-element */
const NotFound = () => {
  return (
    <div className='justify-center'>
      <center className='mt-24 m-auto'>
        <img
          width={200}
          height={200}
          src='/penguin.png'
          alt='A photo of a sunset over the ocean'
          className='emoji-404'
        />

        <div className=' tracking-widest mt-4'>
          <span className='text-gray-500 text-6xl block'>
            <span>4 0 4</span>
          </span>
          <span className='text-gray-500 text-xl'>
            Sorry, We could not find what you are looking for!
          </span>
        </div>
      </center>
      <center className='mt-6'>
        <a
          href='./'
          className='text-gray-500 font-mono text-xl bg-gray-200 p-3 rounded-md hover:shadow-md'
        >
          Go back{" "}
        </a>
      </center>
    </div>
  );
};
export default NotFound;
