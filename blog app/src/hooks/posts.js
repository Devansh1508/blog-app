import { useToast } from "@chakra-ui/react";
import { useState } from "react";
export function useAddPost() {
    const [isLoading, setLoading] = useState(false);
    const toast = useToast();

    async function addPost(post) {
        const response = await fetch('http://localhost:3000/api/blogs/publish', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
        });


        setLoading(true);
        toast({
            title: "Post added successfully!",
            status: "success",
            isClosable: true,
            position: "top",
            duration: 5000,
        });
        setLoading(false);
    }

    return { addPost, isLoading };
}


export const getBlogs=async ()=> {
    const token = localStorage.getItem('token');
    if (!token) {
        console.log("No token found");
        return;
    }
    const response = await fetch('http://localhost:3000/api/blogs',{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
    }); // Replace with your server URL
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
    return data;
}

export function useToggleLike({ id, isLiked, uid }) {
    const [isLoading, setLoading] = useState(false);

    async function toggleLike() {
        // setLoading(true);
        // const docRef = doc(db, "posts", id);
        // await updateDoc(docRef, {
        //     likes: isLiked ? arrayRemove(uid) : arrayUnion(uid),
        // });
        // setLoading(false);
    }

    return { toggleLike, isLoading };
}



export function useDeletePost(id) {
    const [isLoading, setLoading] = useState(false);
    const toast = useToast();

    async function deletePost() {
        const res = window.confirm("Are you sure you want to delete this post?");

        if (res) {
            setLoading(true);

            // Delete post document
            // await deleteDoc(doc(db, "posts", id));
            toast({
                title: "Post deleted!",
                status: "info",
                isClosable: true,
                position: "top",
                duration: 5000,
            });

            setLoading(false);
        }
    }

    return { deletePost, isLoading };
}


export const getBlogById = async (id) => {
    const token = localStorage.getItem('token');
    if (!token) {
        console.log("No token found");
        return;
    }
    const response = await fetch(`http://localhost:3000/api/blogs/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
};
