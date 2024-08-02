import { Avatar, Card, CardBody } from '@nextui-org/react'

const PostItem = (props) => {
  const { post } = props;

  return (
    <Card className='w-full h-full shadow-md shadow-white'>
    {post &&     
      <CardBody className='p-5 h-full flex flex-col justify-center hover:bg-slate-200 transition-all '>
        <div className='flex items-center mb-4'>
          <Avatar showFallback src='https://images.unsplash.com/broken' size='md' />
          <p className="text-gray-400 ml-2">{post.title}</p>
        </div>
        <p className="font-bold text-xl mb-4">{post.body}</p>
      </CardBody>
    }
    </Card>
  )
}

export default PostItem