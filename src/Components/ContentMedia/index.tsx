import React from "react";
import styled from "styled-components";
import {Grid,CardMedia,Dialog,Typography} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { PostsProps } from "../../types";

const Panel = styled.div`
  margin:5px;
`;
const Delete = styled(DeleteIcon)`
  position:relative;
  cursor:pointer;
  right:15px;
  top:9px;
  float:right;
`;

const ContentMedia:React.FC<PostsProps> = ({post} , deletePost:any) =>{
  return(
    <Panel>
      <Grid container style={{margin:10}}>
        <Grid item xs={10} sm={10} md={10}>
          <Typography style={{fontSize:14,color:"#000",marginBottom:5}}>
            {post.username}
          </Typography>
          <Typography style={{fontSize:18}}>
            {post.post}
          </Typography>
        </Grid>
        <Grid item xs={2} sm={2} md={2}>
          <Delete onClick={()=>{console.log(post)}} />
        </Grid>
      </Grid>
    </Panel>
  );
}
export default ContentMedia;