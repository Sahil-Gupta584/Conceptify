'use client';
import { useEffect, useState } from 'react';
import { ExternalLink, MessageSquarePlus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { getAllFeedbacks, updateFeedback } from '../utils/actions';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

export type Feedback = {
    _id: string;
    title: string;
    description: string;
    upvotes: number;
    upvotedBy: string[]
}

export default function FeedbackPage() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [feedbackList, setFeedbackList] = useState<Feedback[]>([
        {
            _id: '1',
            title: 'Add Dark Mode',
            description: 'It would be great to have a dark mode option for better visibility at night.',
            upvotes: 15,
            upvotedBy: []
        },
        {
            _id: '2',
            title: 'Mobile App',
            description: 'Please develop a mobile app version for easier access on phones.',
            upvotes: 8,
            upvotedBy: []
        }
    ]);
    const router = useRouter()
    const { data, status } = useSession();

    useEffect(() => {
        console.log('data', data);
        if (status === 'unauthenticated') {
            router.push('/')
        }
        getAllFeedbacks().then(res => setFeedbackList(JSON.parse(res)))
    }, [status, router, data]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim() || !description.trim()) return;

        setTitle('');
        setDescription('');

        const newFeedback: Feedback = {
            _id: Date.now().toString(),
            title: title.trim(),
            description: description.trim(),
            upvotes: 0,
            upvotedBy: []
        };

        setFeedbackList([newFeedback, ...feedbackList]);
        await updateFeedback(newFeedback, 'new')

    };

    const toggleUpvote = async (id: string) => {
        setFeedbackList(feedbackList.map(feedback => {
            if (feedback._id === id) {
                const updatedFeedback: Feedback = {
                    ...feedback,
                    upvotes: feedback.upvotedBy.includes(data?.user?.id as string) ? feedback.upvotes - 1 : feedback.upvotes + 1,
                    upvotedBy: feedback.upvotedBy.includes(data?.user?.id as string) ?
                        feedback.upvotedBy.filter(id => id !== data?.user?.id)
                        :
                        [...feedback.upvotedBy, data?.user?.id as string]
                };

                updateFeedback(updatedFeedback, 'update')
                return updatedFeedback
            }
            return feedback;
        }));

    };

    return (
        <div className="min-h-screen bg-neutral-900 p-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flow-row justify-between gap-4 text-white">

                    <div className="flex items-center gap-2 ">
                        <MessageSquarePlus className="h-8 w-8" />
                        <h1 className="md:text-3xl text-xl font-bold ">Feedback Collection</h1>
                    </div>
                    <Link
                        target="_blank"
                        href="/"
                        className="self-end bg-purple-600 w-fit px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
                    >
                        Chat   <ExternalLink className="h-4 w-4 mb-1 inline-block" />
                    </Link>
                </div>

                <div className="flex flex-col md:flex-row gap-8 mt-4">
                    {/* Feedback Form */}
                    <div className="bg-neutral-800 border-purple-500/30 border text-white rounded-xl shadow-sm p-6 h-fit md:w-1/2 ">
                        <h2 className="text-xl font-semibold mb-6">Submit Feedback</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="title" className="block text-sm font-medium  mb-1">
                                    Title
                                </label>
                                <input
                                    id="title"
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="w-full px-4 py-2 rounded-lg bg-[#494949] outline-none border-[#835353] focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                                    placeholder="Enter a brief title"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="description" className="block text-sm font-medium  mb-1">
                                    Description
                                </label>
                                <textarea
                                    id="description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="w-full px-4 py-2 rounded-lg bg-[#494949] outline-none border-[#835353] focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all h-32"
                                    placeholder="Provide more details about your feedback"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors"
                            >
                                Submit Feedback
                            </button>
                        </form>
                    </div>

                    {/* Feedback List */}
                    <div className="bg-neutral-800 text-white rounded-xl shadow-sm p-6 md:w-1/2 md:max-h-[82vh]">
                        <h2 className="text-xl font-semibold mb-6">Recent Feedback</h2>
                        <div className="space-y-4 overflow-y-auto max-h-[96%] scroll-smooth no-scrollbar">
                            {feedbackList.sort((a, b) => (b.upvotedBy.length - a.upvotedBy.length)).map((feedback) => (
                                <div
                                    key={feedback._id}
                                    className="flex flex-col md:flex-row h-fit gap-4 items-start justify-between border bg-[#494949] rounded-lg p-4 outline-none border-[#835353] transition-colors"
                                >
                                    <div className='grow max-w-[88%]'>
                                        <h3 className="font-semibold  break-words">{feedback.title}</h3>
                                        <p className="text-gray-300 mt-1 break-words">{feedback.description}</p>
                                    </div>
                                    <div className="flex items-center gap-3 self-end">
                                        <button
                                            className={`px-4 py-2 rounded-xl group text-center text-lg duration-150 border border-base-content/10 ${feedback.upvotedBy.includes(data?.user?.id as string) && "bg-purple-600"} hover:bg-purple-700 border-[#835353]`}
                                            title="Upvote post"
                                            onClick={() => toggleUpvote(feedback._id)}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="w-5 h-5  ease-in-out duration-150 group-hover:-translate-y-0.5"
                                            >
                                                <path d="m18 15-6-6-6 6" />
                                            </svg>
                                            {feedback.upvotes}
                                        </button>

                                    </div>
                                </div>
                            ))}

                            {feedbackList.length === 0 && (
                                <p className="text-gray-300">No feedbacks yet.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

