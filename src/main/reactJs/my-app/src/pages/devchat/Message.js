import React from 'react';
import { useSelector } from 'react-redux';

function Message({ item }) {
    const date = new Date(item.date);
    const msgTime = { hour: 'numeric', minute: 'numeric', hour12: true };
    const uploadTime = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const timeString = date.toLocaleTimeString('ko-KR', msgTime);
    const msgImgUrl = process.env.REACT_APP_CHATIMG;
    const msgImgDir = date.toLocaleDateString('ko-KR', uploadTime).replace(/\. /g, '').replace('.', '');
    const userImg = process.env.REACT_APP_PHOTO + 'member/';

    const userName = useSelector(state => state.devChat.userName);

    console.log({ item });
    if (item?.type === 'READ_MARKER') {
        return (
            <div className='chat-body-readmarker'>
                {item.msg}
            </div>
        );
    } else {
        if (item?.type === 'CHAT') {
            console.log(item.msg);
            return (
                item.userName === userName ?
                    <div>
                        {
                            item.msgImg &&
                            item.msgImg.map((url, idx) => (
                                <img
                                    key={idx}
                                    alt=''
                                    src={`${msgImgUrl}${msgImgDir}/${url}`}
                                    style={{ width: '100px' }}
                                />
                            ))
                        }
                        <div className="chat-body-msg-s">
                            <div className="chat-body-msg-s-date">{timeString}</div>
                            <div className="chat-body-msg-s1">
                                <div className="chat-body-msg-s-box">
                                    {
                                        item.msg.length > 200 ? <><div>{item.msg.substring(0, 200)}...</div>
                                            <button>전체보기</button></> :
                                            <div>{item.msg}</div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div>
                        {
                            item.msgImg &&
                            item.msgImg.map((url, idx) => (
                                <img
                                    key={idx}
                                    alt=''
                                    src={`${msgImgUrl}${msgImgDir}/${url}`}
                                    style={{ width: '100px' }}
                                />
                            ))
                        }
                        <div className="chat-body-msg-r">
                            <div className="chat-body-msg-r-img" />
                            <div className="chat-body-msg-r-id">{item.userName}</div>
                            <div className="chat-body-msg-r-parent">
                                <div className="chat-body-msg-r1">
                                    <div className="chat-body-msg-r-box">
                                        {
                                            item.msg.length > 200 ? <><div>{item.msg.substring(0, 200)}...</div>
                                                <button>전체보기</button></> :
                                                <div>{item.msg}</div>
                                        }
                                    </div>
                                </div>
                                <div className="chat-body-msg-r-date">{timeString}</div>
                            </div>
                        </div>
                    </div>
            );
        } else if (item?.type === 'ENTER') {
            return (
                <div className='chat-body-msg-stats'>
                    <div className='chat-body-user-stat' />
                    <div className='chat-body-user-stat-text'>
                        {item.msg}
                    </div>
                </div>
            );
        } else if (item?.type === 'EXIT') {
            return (
                <div className='chat-body-msg-stats'>
                    <div className='chat-body-user-stat' />
                    <div className='chat-body-user-stat-text'>
                        {item.msg}
                    </div>
                </div>
            )
        }
    }
}

export default React.memo(Message);