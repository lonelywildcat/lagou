import styled from 'styled-components';

export const SidebarWrapper = styled.div`
    margin: 36px 0 0 14px;
    width: 321px;
    float: left;    
`;

export const SidebarMenu = styled.div`
    float: left;
    width: 321px;    
    color: #333;
    height: 48px;    
    box-sizing: border-box;
    position: relative;
    z-index: 1;
    border: ${props => props.active ? "0px solid white" : "hidden"};
    box-shadow: ${props => props.active ? "0 0 4px 2px rgba(0,0,0,.09)" : "inherit"};    
    .iconfont{ 
        position: absolute;
        left: 305px;
        top: 2px;        
        z-index: 2;
        display: block;
        height: 46px;
        line-height: 46px;        
        font-size: 12px;        
        padding-right: ${props => props.active ? "16px" : "2px"};        
        float: right;
        background-color: white;
        
    }   
`;

export const SidebarMenuTitle = styled.div`
    float: left;
    font-size: 18px;
    line-height: 48px;
    font-weight: 500;
    margin-left: 12px;
`;

export const SidebarMenuList = styled.a`
    display: block;
    float: left;
    margin-left: 12px; 
    margin-right: 12px;   
    font-size: 14px;
    line-height: 48px;    
    color: #333;
    text-decoration:none
    &:hover{
        color: #00b38a;
    }      
`;

export const SubMenuWrapper = styled.div`
    position: absolute;
    left: 322px;
    z-index: 1;
    width: 600px;
    padding-right: 12px;
    border: 0px solid white;
    box-shadow: 0 0 4px 2px rgba(0,0,0,.09); 
    background-color: white;   
`;

export const SidebarSubMenuItem = styled.div`
    width: 600px;    
`;

export const SidebarSubMenuTitle = styled.div`
    font-size: 14px;
    height: 48px;
    line-height: 48px;
    margin-left: 24px;
`;

export const SidebarSubMenuListWrapper = styled.div`
    width: 600px
    overflow: hidden;
     margin-left: 24px;
`;

export const SidebarSubMenuList = styled.a`
    float: left;
    font-size: 14px;
    height: 36px;
    line-height: 36px;
    display: block;
    margin-left: 0px;
    color: #333;
    text-decoration:none
    &:hover{
        color: #00b38a;
        .span{
           color: #333; 
        }
    }
    .span{
        padding-left: 6px;
        padding-right: 6px;
    } 
`;
