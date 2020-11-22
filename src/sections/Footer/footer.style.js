import styled from "styled-components";

const FotterWrapper = styled.section`
  padding-top: 40px;
  padding-bottom: 25px;
  background: #3c494f;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  .section__particle{
      position: absolute;
      &.one{
          left: 0;
          top: 20%;
          width: 270px;
      }
  }
  ul{
    padding: 0;
    list-style: none;
    margin: 0;
    li .anchor {
      color: ${props => props.theme.white};
    }
  }
  p{
    font-size: 18px;
    line-height: 38px;
    color: ${props => props.theme.white};
  }
  .anchor{
    transition: 450ms all;
    color: ${props => props.theme.white};
    &:hover {
      color: ${props => props.theme.black};
    }
  }
  .footer-contact{
    .footer-widgets{
      .contactf{
        padding-right: 15px;
        margin: 0px;
        .social-icons{
          color: #3c494f;
          transition:color .25s
          margin-left: 5px;
          margin-right: 5px;
          transition: 450ms all;
          filter: opacity(90%);
          //  color: ${props => props.theme.headingColor}; 
            .twitter:hover {
              filter: brightness(0.5) sepia(1) hue-rotate(150deg) saturate(5);
            }
            .github:hover {
              filter: brightness(1) invert(50)
            }
            .docker:hover {
              filter: brightness(0.4) sepia(1) hue-rotate(150deg) saturate(5);
            }
            .youtube:hover {
              filter: brightness(0.3) sepia(1) hue-rotate(355deg) saturate(30);
            }
            .slack:hover {
              filter: brightness(.15) sepia(1) hue-rotate(255deg) saturate(15);
            }
            .mail:hover {
              filter: opacity(100) brightness(.6) sepia(.5) hue-rotate(150deg) saturate(1);
            }
            }
          }
        }
      }
    }
    .social__link {
      display: block;
      color: #3c494f;
 
  }
  .twitter:hover {

  }
  }
  .social__link--mail:hover {
      color:#3c494e
  }
  
  .social__link--slack:hover {
      color:#4A154B
  }
  
  // .social__link--twitter:hover {
  //     color:#1da1f2
  // }
  
  .social__link--github:hover {
      color:#24292e
  }
  
  .social__link--youtube:hover {
      color:red
  }
  
  .social__link--docker:hover {
      color:#2496ed
  }
    .widget-title {
      color: ${props => props.theme.white};
      font-size: 24px;
      margin-bottom: 20px;
    }
  }
  .footer-logo {
    max-width: 200px;
    height: auto;
  }
  .descript {
    margin-top: -10px;
    color: white;
    margin-bottom: 20px;
    padding-left: 10px;
    font-size: 15px;
    line-height: 25px;
  }
  .footer-widgets {
    &.first {
      margin-top: -10px;
    }
  }
  .footer-widgets {
    margin-bottom: 25px;
    .widget-title {
      color: ${props => props.theme.white};
      font-size: 24px;
      margin-bottom: 20px;
    }
    .info {
      font-size: 18px;
      line-height: 38px;
      margin-bottom: 32px;
      li {
        display: flex;
        align-items: center;
        svg {
          margin-right: 10px;
          color: ${props => props.theme.white};
        }
      }
    }
    .social{
      li {
        display: inline-block;
        .anchor {
          display: block;
          height: 60px;
          width: 60px;
          line-height: 60px;
          text-align: center;
          transition: 450ms all;
          &:hover {
            color: ${props => props.theme.white};
            background: rgb(251, 123, 129);
            background: -moz-linear-gradient(
              left,
              rgba(251, 123, 129, 1) 0%,
              rgba(254, 191, 179, 1) 100%
            );
            background: -webkit-linear-gradient(
              left,
              rgba(251, 123, 129, 1) 0%,
              rgba(254, 191, 179, 1) 100%
            );
            background: linear-gradient(
              to right,
              rgba(251, 123, 129, 1) 0%,
              rgba(254, 191, 179, 1) 100%
            );
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fb7b81', endColorstr='#febfb3',GradientType=1 );
            border-color: #febfb3;
            
          }
        }
      }
      li + li {
        margin-left: 30px;
      }
    }
    .widget-catagory {
      li {
        .anchor {
          font-size: 16px;
          line-height: 22px;
        }
      }
      li + li {
        margin-top: 7px;
      }
    }
  }
  .footer-bottom{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 10px;
    margin-top: 10px;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    .footer-menu{
      order: 2;
      li {
        display: inline-block;
        font-size: 18px;
      }
      li + li{
        margin-left: 40px;
      }
    }
    p{
      order: 1;
      margin: 0;
    }
  }
  @media only screen and (max-width: 1600px) {
    .section__particle{
      &.one{
          display: none;
      }
    }
  }
  @media only screen and (max-width: 1280px) { 
    .footer-widgets {
      .social {
        li + li {
          margin-left: 15px;
        }
      }
    }
  }
  @media only screen and (max-width: 912px) {
    background-position: -200px; 
    .footer-widgets {
      .widget-catagory {
        margin-left:0px;
      }
      margin-bottom: 70px;
    }
    .footer-bottom {
      display: block;
      margin-top: 30px;
     .footer-menu {
        margin-bottom: 40px;
      }
      .footer-menu,
      .copyright-text {
        text-align: center;
      }
    }
  }
  @media only screen and (max-width: 568px) {
    background-position: 10%;
    // text-align: center;
    .footer-widgets {
      margin-bottom: 20px;
      .info {
        li {
          justify-content: center;
        }
      }
    }
  }
  @media only screen and (max-width: 375px) {
    .footer-bottom {
      .footer-menu {
        li {
          display: block;
        }
        li + li {
          margin-left: 0;
          margin-top: 30px;
        }
      }
    }
  }
`;

export default FotterWrapper;