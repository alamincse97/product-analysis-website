import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
            <Accordion defaultActiveKey={["0"]} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h3>Whats is Context API?</h3></Accordion.Header>
                    <Accordion.Body>
                    <span className='fw-bold'>Context API:</span>React Context API হল একটি রিঅ্যাক্ট অ্যাপের জন্য কার্যকরভাবে গ্লোবাল ভেরিয়েবল তৈরি করার একটি উপায় যা চারপাশে পাস করা যেতে পারে। Context API দিয়ে props mapping না করেই tree এর নিচের দিকের কোন child component তার উপরের দিকের যেকোন component এ access পাবে। কন্টেক্সট shared data কে global হিসেবে ধরে নেয় যাতে component tree এর সবাই মোটামুটি access পায়।
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h3>What is Semantic Tag?</h3></Accordion.Header>
                    <Accordion.Body>
                    <span className='fw-bold'>Semantic Tag:</span>একটি Semantic ট্যাগ ব্রাউজার এবং ডেভেলপার উভয়ের কাছে HTML কোড কে স্পষ্টভাবে বুঝাতে সাহায্য করে। কোডকে সুন্দর ও বুঝতে সুবিধার জন্য HTML Semantic Tag ব্যাবহার করা হয়। কয়েকটি Semantic ট্যাগ এর উদাহারণঃ form, table, ও article.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><h3>Defference Between Inline Block And Inblock Element?</h3></Accordion.Header>
                    <Accordion.Body>
                    <span className='fw-bold'>Inline Block:</span>The element doesn't start on a new line and only occupy just the width it requires. We can't set the width or height.
                    <br /><span className='fw-bold'>Inline Block Element:</span>It's formatted just like the inline element, where it doesn't start on a new line. But, we can set width and height values.
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
        </div>
    );
};

export default Blogs;