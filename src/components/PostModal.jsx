import React,{ useState } from 'react';
import styled from 'styled-components';


const PostModal = (props) => {
    const [editortText, setEditorText] = useState('');

    const reset = (e) => {
        setEditorText('');
        props.handleClick(e);
    }
    return (
        <>
            { props.showModal === 'open' &&
                <Container>
                    <Content>
                        <Header>
                            <h2>Create a post</h2>
                            <button onClick={(event) => reset(event)}>
                                <img src="/images/close-icon.png " alt="" />
                            </button>
                        </Header>
                        <SharedContent>
                            <UserInfo>
                                <img src="/images/user.svg" alt="" />
                                <span>Name</span>
                            </UserInfo>
                            <Editor>
                                <textarea name="" id="" cols="30" rows="10"
                                    value={editortText}
                                    onChange={(e) => setEditorText(e.target.value)}
                                    placeholder='Share your thoughts'
                                    autoFocus={true}
                    
                                >
                                </textarea>
                            </Editor>
                        </SharedContent>
                        <SharedCreation>
                            <AttachAssets>
                                <AssetButton>
                                    <img src="/images/photo-camera.svg" alt="" />
                                </AssetButton>
                                <AssetButton>
                                    <img src="/images/youtube.svg" alt="" />
                                </AssetButton>
                            </AttachAssets>
                            <ShareComment>
                                <AssetButton>
                                    <img src="/images/chat-boxes.svg" alt="" />
                                    Anyone
                                    {/* <img src="/imags/comment.gif" alt="" /> */}
                                </AssetButton>
                            </ShareComment>
                            <PostButton>
                                post
                            </PostButton>
                        </SharedCreation>
                    </Content>
                </Container>
            }
        </>

    )
}
const Container = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: 9999;
color: black;
background-color: rgba(0, 0, 0, 0.8);
`;

const Content = styled.div`
width: 100%;
max-width: 552px;
background-color: white;
max-height: 90%;
overflow: initial;
border-radius: 5px;
postition: relative;
display: flex;
flex-direction: column;
top: 32px;
margin: 0 auto;
`;

const Header = styled.div`
display: block;
padding: 16px 20px;
border-bottom: 1px solid rgba(0, 0, 0, 0.15);
font-size: 16px;
line-height: 1.5;
color: rgba(0, 0, 0, 0.6);
font-weight: 400;
display: flex;
justify-content: space-between;
align-items: center;
button{
    height: 40px;
    width: 45px;
    min-width: auto;
    color: rgba(0, 0, 0, 0.15);
    img, svg {
        width: 30px;
        height: 30px;
        pointer-events: none;
        }
}
`;

const SharedContent = styled.div`
display: flex;
flex-direction: column;
flex-grow: 1;
overflow-y: auto;
vertical-align: baseline;
background: transparent;
padding: 8px 12px;
`;

const UserInfo = styled.div`
display: flex;
align-items: center;
padding: 12px 24px;
svg, img {
    width: 48px;
    height: 48px;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 50%;
}
span{
    font-weight: 600px;
    font-size: 16px;
    line-height: 1.5;
    margin-left: 5px;
    

}
`;

const SharedCreation = styled.div`
display: flex;
justify-content: space-between;
padding: 12px 24px 12px 16px;
`;

const AssetButton = styled.button`
display: flex;
align-items: center;
height: 40px;
min-width: auto;
color: rgba(0, 0, 0, 0.5);
img {
    width: 35px;
    height: 35px;
}

`;

const AttachAssets = styled.div`
display: flex;
align-items: center;
padding-right: 8px;
${AssetButton} {
    width: 50px;
}
`;

const ShareComment = styled.div`
padding-left: 8px;
margin-right: auto;
border-left: 1px solid rgba(0, 0, 0, 0.15);
${AssetButton} {
    margin-right: 5px;
}
`;
const PostButton = styled.button`
min-width: 60px;
border-radius: 20px;
paddding-left: 16px;
padding-right: 8px;
background: #0a66c2;
color: white;
&:hover{
    background: #004182;
}
`;

const Editor = styled.div`
padding: 12px 24px;
textarea{
    width: 100%;
    min-height: 100px;
    resize: none;
}
input {
    width: 100%;
    height: 35px;
    font-size: 16px;
    margin-bottom: 20px;
}
`;

export default PostModal