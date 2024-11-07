import styled from 'styled-components/native';

// отдельные компоненты для стилизации
const PostView = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 3px;
  border-bottom-color: rgba(0,0,0, 0.1);
  border-bottom-style: solid;
`;

const PostImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 12px;
  margin-right: 12px;
`;

const PostDetails = styled.View`
  flex: 1;
  justify-content: center;
`;

const PostTitle = styled.Text`
  font-size: 18px;
  font-weight: 700;
`;


const Post = ({ title, image }) => {
    return (
        <PostView>
            <PostImage source={{ uri: `${image}` }} />
            <PostDetails>
                <PostTitle>{title}</PostTitle>
            </PostDetails>
        </PostView>
    );
}

export default Post