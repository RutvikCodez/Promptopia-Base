import TitleDesc from '@components/reusable/TitleDesc'
import React, { useEffect, useState } from 'react'
import Feed from './Feed'
import { postType } from '@utils/types';
import { apiCall } from '@utils/apiCall';

const MyPromptCard = () => {
    const [posts, setPosts] = useState<postType[]>([])
    useEffect(() => {
      const fecthPrompts = async () => {
        const posts: postType[] = await apiCall("api/prompt")
        setPosts(posts)
      }
    }, [])
    
    // const posts: postType[] = await apiCall("api/prompt");
  return (
    <section className="w-full flex flex-col justify-center items-center gap-10">
      <div className="flex flex-col items-center text-center">
        <TitleDesc
          desc=" Promptopia is an open-source AI prompting tool for modern world to
        discover, craete and share creative prompts"
          title=" Discover & Share"
          subtitle="AI-Powered Prompts"
        />
        <Feed data={posts} />
      </div>
    </section>
  )
}

export default MyPromptCard