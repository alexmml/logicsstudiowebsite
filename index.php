<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' />
        <title>Logics Studio</title>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
        <link href="css/site_fonts.css" rel="stylesheet" type="text/css" />
        <link href="css/site.css" rel="stylesheet" type="text/css" />
        <script type="text/javascript" src="scripts/jquery.js"></script>
        <script type="text/javascript" src="scripts/jqsite.js"></script>
        <script type="text/javascript" src="scripts/angularjs.js"></script>
        <script type="text/javascript" src="scripts/ansite.js"></script>
    </script>
</head>
<body ng-app="myapp">
    <div id="overlay">
        <div id="progstat"></div>
        <div id="progress"></div>
    </div>

    <script src="scripts/three.js" type="text/javascript"></script>
    <script src="scripts/OrbitControls.js" type="text/javascript"></script>
    <script src="scripts/WebGL.js" type="text/javascript"></script>

    <section id="header">
        <ul>
            <li><span id="logo"><img src="images/4.png" alt=""/></span></li>
            <li>
                <div id="nav-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </li>
        </ul>
    </section>

    <section id="footer">
        <ul>
            <li><a>Site Powered by <b>Inversiones Logics Studio 828 C.A.</b> 2019</a></li>
            <li><a href="#" class="link-3"><i class="fas fa-globe"></i></a></li>
            <li><a href="#" class="link-1">Work with us</a></li>
            <li><a href="#" class="link-1">Leave a Message <i class="fas fa-long-arrow-alt-right"></i></a></li>
        </ul>
    </section>

    <section id="menuitems">
        <div class="vertical-center">
            <ul>
                <li><a href="#page0" id="page0a"><i class="fas fa-home"></i></a><span id="page0span">Home</span></li>
                <li><a href="#page1" id="page1a">1</a><span id="page1span">Who we are?</span></li>
                <li><a href="#page2" id="page2a">2</a><span id="page2span">Our clients</span></li>
                <li><a href="#page3" id="page3a">3</a><span id="page3span">Our Team</span></li>
                <li><a href="#page4" id="page4a">4</a><span id="page4span">Our Projects</span></li>
                <li><a href="#page5" id="page5a">5</a><span id="page5span">Meet Us</span></li>
            </ul>
        </div>
    </section>

    <div id="content" class="content">
        <div class="subcontent-2" id="page0">
            <section id="message">
                <span><h1>Hard Work</h1><br /><h2>to make things stunning </h2></span>
            </section>
            <div id="canvas"></div>
        </div>

        <div class="subcontent" id="page1">
            <div class="pagewidth">
                <h3><u>&nbsp;&nbsp;</u>we are <b>Logics Studio</b></h3>
                <h4>We are small but multidisciplinary team, focus in challenges related to digital product development, marketing, operations, and business strategy. Our purpose is to unleash the collective genius of our people, our clients, and our partners to accomplish our goals.</h4>

                <ul class="flex-0">
                    <li><b>Logics </b>Desktop
                        <p>Desktop application has the power to be always visible, and even always open. We build applications for Windows, Linux and MacOS. If you want faster development and more regularity in your operations, this could be the right solution for your needs.</p>
                    </li>
                    <li><b>Logics </b>Web
                        <p>Code once and works anywhere. Do you want a personal, corporate, functional page? We help you with all the things that are involved in web development. We use CMS's, Frameworks, High Level Languages, custom websites.</p>
                    </li>
                    <li><b>Logics </b>Mobile
                        <p>Ready to give massive or corporate services. We build Cross Platform or native applications for Windows Mobile, Android and IOS.</p>
                    </li>
                    <li><b>Logics </b>Database
                        <p>Without question, the software industry is a data-driven environment. So, everything depends on it. We are experts in Oracle, SQL Server, PostgreSQL, Cassandra and many others databases.</p>
                    </li>
                    <li><b>Logics </b>BI
                        <p>If you have an extensive database, you will want to get all that information quickly, easily and presentably. From simple reports to complex ones, we can do it as a team.</p>
                    </li>
                </ul>

                <div class="float-1">
                    <button type="button" class="btn-1">Want to know more?</button>
                </div>
            </div>
        </div>
        <div class="subcontent" id="page1_a">
            <section id="message-2">
                <span><h1>Creativity</h1><br /><h2>To build beautiful things </h2></span>
            </section>
        </div>

        <div class="subcontent" id="page2">
            <div class="pagewidth">
                <h3><u>&nbsp;&nbsp;</u>some of <b>our Clients</b></h3>
                <h4>We are grateful to work and have worked with the best companies and startups.</h4>
                <br />
                <br />
                <div class="table-1">
                    <div>
                        <h5 class="speech-bubble">We want you to be the next!</h5>
                    </div>
                    <div>
                        <ul class="flex-1">
                            <li id='clients-0'><div><span id='clients-1'><i class="fas fa-2x fa-user-tie"></i></span><span id='clients-2'><a href="#">Let's start!</a></span></div></li>
                            <li><img class="uno" src="images/clients/atrio.png" alt=""/><img class="dos" src="images/clients/ve.png" alt=""/></li>
                            <li><img class="uno" src="images/clients/bancoactivo.png" alt=""/><img class="dos" src="images/clients/ve.png" alt=""/></li>
                            <li><img class="uno" src="images/clients/bancoexterior.png" alt=""/><img class="dos" src="images/clients/ve.png" alt=""/></li>
                            <li><img class="uno" src="images/clients/bancoplaza.png" alt=""/><img class="dos" src="images/clients/ve.png" alt=""/></li>
                            <li><img class="uno" src="images/clients/bancrecer.png" alt=""/><img class="dos" src="images/clients/ve.png" alt=""/></li>
                            <li><img class="uno" src="images/clients/bnc.png" alt=""/><img class="dos" src="images/clients/ve.png" alt=""/></li>
                            <li><img class="uno" src="images/clients/credicard.png" alt=""/><img class="dos" src="images/clients/ve.png" alt=""/></li>
                            <li><img class="uno" src="images/clients/credinka.png" alt=""/><img class="dos" src="images/clients/pe.png" alt=""/></li>
                            <li><img class="uno" src="images/clients/fama.png" alt=""/><img class="dos" src="images/clients/ni.png" alt=""/></li>
                            <li><img class="uno" src="images/clients/inmerca.png" alt=""/><img class="dos" src="images/clients/ve.png" alt=""/></li>
                            <li><img class="uno" src="images/clients/mibanco.png" alt=""/><img class="dos" src="images/clients/ve.png" alt=""/></li>
                            <li><img class="uno" src="images/clients/multibank.png" alt=""/><img class="dos" src="images/clients/pa.png" alt=""/></li>
                            <li><img class="uno" src="images/clients/peterantal.png" alt=""/><img class="dos" src="images/clients/hu.png" alt=""/></li>
                            <li><img class="uno" src="images/clients/vivirseguros.png" alt=""/><img class="dos" src="images/clients/ve.png" alt=""/></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="subcontent" id="page2_a">
            <section id="message-2">
                <span><h1>Innovation</h1><br /><h2>To develop all necessary</h2></span>
            </section>
        </div>

        <div class="subcontent" id="page3">
            <div class="pagewidth">
                <h3><u>&nbsp;&nbsp;</u>family first, know the <b>Team</b></h3>
                <h4>We are professionals, experts, dedicated, we have more than 30 years of experience and our common commitment is to meet the objectives and make our customers have the most advanced applications that really works.</h4>

                <br />
                <br />
                <h6><i class="fas fa-1x fa-quote-left"></i>Be both, dreamers and doers<i class="fas fa-1x fa-quote-right"></i></h6>
                <h6 class="title">Alex Martínez</h6>
                <h6 class="subtitle">Founder</h6>

                <br />
                <br />
                <ul class="flex-3">
                    <li><div><br/><br/><br/><span>Alex Martinez<br/>Founder & Leader & Developer</span></div></li>
                    <li><div><br/><br/><br/><span>Gisilbek Parra<br/>Developer</span></div></li>
                    <li><div><br/><br/><br/><span>Ana Márquez<br/>Developer</span></div></li>
                    <li><div><br/><br/><br/><span>Alfredo Rico<br/>Developer</span></div></li>
                    <li><div><br/><br/><br/><span>Francisco Morales<br/>Developer</span></div></li>
                    <li><div><br/><br/><br/><span>Luis Rodríguez<br/>Developer</span></div></li>
                    <li><div><br/><br/><br/><span>Manuel Acosta<br/>DBA Admin</span></div></li>
                    <li><div><br/><br/><br/><span>Fernando Moreno<br/>OS Admin</span></div></li>
                    <li><div><br/><br/><br/><span>Maiker Gutierrez<br/>OS Admin</span></div></li>
                    <li><div><span><i class="fas fa-3x fa-user-astronaut"></i></span><span>You<br/>Apply for your next job</span></div></li>
                </ul>
            </div>
        </div>
        <div class="subcontent" id="page3_a">
            <section id="message-2">
                <span><h1>Change</h1><br /><h2>To adapt to the future</h2></span>
            </section>
        </div>

        <div class="subcontent" id="page4">
            <div class="pagewidth">
                <h3><u>&nbsp;&nbsp;</u>featured <b>Works</b></h3>
                <h4>We provide services that can grow with your company.</h4>

                <br />
                <br />
                <ul class="flex-4">
                    <li><div></div></li>
                    <li><div></div></li>
                    <li><div></div></li>
                </ul>
                <br />
                <ul class="flex-4">
                    <li><div></div></li>
                    <li><div></div></li>
                    <li><div></div></li>
                </ul>
            </div>
        </div>
        <div class="subcontent" id="page4_a">
            <section id="message-2">
                <span><h1>Believe</h1><br /><h2>Don't have any limits</h2></span>
            </section>
        </div>

        <div class="subcontent" id="page5">
            <div class="pagewidth">
                <h3 style="color:#eee;"><u>&nbsp;&nbsp;</u>we are looking forward to know you, <b style="color: #fff; text-shadow: 5px 5px 5px #333;">Contact Us</b></h3>
                <h4 style="color:#eee;">We are the team you need.</h4>

                <br />
                <br />
                <ul class="flex-5">
                    <li>
                        <div>
                            <span class="title">Join Us</span>
                            <p>Are you keen on making a meaningful impact? Interested in joining <b>Logics Studio</b> team?</p>
                            <a class='animated-arrow' href='https://google.com'>
                                <span class='the-arrow -left'>
                                    <span class='shaft'></span>
                                </span>
                                <span class='main'>
                                    <span class='text'>
                                        Upload your resume
                                    </span>
                                    <span class='the-arrow -right'>
                                        <span class='shaft'></span>
                                    </span>
                                </span>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span class="title">Start a New Project</span>
                            <p>Are you ready? Let us know your project or development need</p>
                            <a class='animated-arrow' href='https://google.com'>
                                <span class='the-arrow -left'>
                                    <span class='shaft'></span>
                                </span>
                                <span class='main'>
                                    <span class='text'>
                                        Leave us a message
                                    </span>
                                    <span class='the-arrow -right'>
                                        <span class='shaft'></span>
                                    </span>
                                </span>
                            </a>
                        </div>
                    </li>
                    <li><div>
                            <span class="title">Social Media</span>
                            <br />
                            <br />
                            <i class="fab fa-2x fa-twitter-square"></i>
                            &nbsp;&nbsp;
                            <i class="fab fa-2x fa-facebook-square"></i>
                            &nbsp;&nbsp;
                            <i class="fab fa-2x fa-instagram"></i>
                            <br />
                            <br />
                            <br />
                            <br />
                            <span class="title">Instant Communication</span>
                            <br />
                            <br />
                            <address><i class="fab fa-1x fa-skype"></i>alex.martinez.lau@outlook.com</address>
                            <address><i class="fas fa-1x fa-phone"></i> +(58) 212-312-3516</address>
                            <address><i class="far fa-1x fa-envelope"></i>contactus@logics828.com</address>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="subcontent" id="page5_a">
            <section id="message-2">
                <span><h1 style="color: #fff;">Lead</h1><br /><h2 style="color: #fff;">To accomplish your goals</h2></span>
            </section>
        </div>
    </div>

    <div class="content" id="menu-content">
        <ul>
            <li><a href="services.php" class="link-2">Services</a></li>
            <li><a href="projects.php" class="link-2">Projects</a></li>
            <li><a href="contactus.php" class="link-2">Contact</a></li>
            <li><h3>We love everything about <b>technology</b>, but not above being <b>human</b></h3></li>
        </ul>
    </div>
    <script src="scripts/pageAnimation.js" type="text/javascript"></script>
</body>
</html>
