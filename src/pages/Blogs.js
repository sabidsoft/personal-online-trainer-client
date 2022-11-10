import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Footer from '../components/Footer'
import useTitle from '../hooks/useTitle'

const Blogs = () => {
    useTitle('Blogs')

    return (
        <div>
            <h1 className='text-center my-5'>Blogs</h1>
            <Container className='my-5'>
                <Row className='mb-5'>
                    <Col className='shadow py-5 px-5 mx-3 mb-5'>
                        <h3 className='text-center mb-5'>Difference between SQL and NoSQL</h3>
                        <ul style={{ textAlign: 'justify' }}>
                            <li className='mb-3'>
                                SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database.
                            </li>
                            <li className='mb-3'>
                                SQL databases defines and manipulates data based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice especially for great complex queries. But from other side it can be restrictive. SQL requires you to use predefined schemas to determine the structure of your data before you work with it. Also all of your data must follow the same structure. This can require significant up-front preparation which means that a change in the structure would be both difficult and disruptive to your whole system.
                                A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store. This flexibility means that documents can be created without having defined structure first. Also each document can have its own unique structure. The syntax varies from database to database, and you can add fields as you go.
                            </li>
                            <li className='mb-3'>
                                In almost all situations SQL databases are vertically scalable. This means that you can increase the load on a single server by increasing things like RAM, CPU or SSD. But on the other hand NoSQL databases are horizontally scalable. This means that you handle more traffic by sharding, or adding more servers in your NoSQL database. It is similar to adding more floors to the same building versus adding more buildings to the neighborhood. Thus NoSQL can ultimately become larger and more powerful, making these databases the preferred choice for large or ever-changing data sets.
                            </li>
                            <li className='mb-3'>
                                SQL databases are table-based on the other hand NoSQL databases are either key-value pairs, document-based, graph databases or wide-column stores. This makes relational SQL databases a better option for applications that require multi-row transactions such as an accounting system or for legacy systems that were built for a relational structure.
                            </li>
                            <li>
                                Great support is available for all SQL database from their vendors. Also a lot of independent consultations are there who can help you with SQL database for a very large scale deployments but for some NoSQL database you still have to rely on community support and only limited outside experts are available for setting up and deploying your large scale NoSQL deployments.
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row className='mb-5'>
                    <Col className='shadow py-5 px-5 mx-3 mb-5'>
                        <h3 className='text-center mb-5'>What is JWT, and how does it work?</h3>
                        <p style={{ textAlign: 'justify' }}>
                            <span className='fw-bold fs-5 d-inline-block mb-2'>JWT: </span><br />JWT, or JSON Web Token, is an open standard(RFC 7519) set of claims to share security information or authorization/authentication requests between a client and a server. Each JWT contains encoded JSON objects. JWTs are signed using a cryptographic algorithm by the token's issuer to ensure that No one could alter the claims after the token is issued and later can be used by the receiving party to verify the token.
                        </p>
                        <p style={{ textAlign: 'justify' }}>
                            <span className='fw-bold fs-5 d-inline-block mb-2'>How JWT Works:</span><br />JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted. A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
                        </p>
                        <p>Once decoded, you will get two JSON strings:</p>
                        <ol>
                            <li>The header and the payload.</li>
                            <li>The signature.</li>
                        </ol>
                        <p style={{ textAlign: 'justify' }}>
                            The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm. The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.
                        </p>
                        <p style={{ textAlign: 'justify' }}>
                            There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others.The signature ensures that the token hasn't been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.
                        </p>
                    </Col>
                </Row>
                <Row className='mb-5'>
                    <Col className='shadow py-5 px-5 mx-3 mb-5'>
                        <h3 className='text-center mb-5'>Difference between javascript and NodeJS</h3>
                        <ul style={{ textAlign: 'justify' }}>
                            <li className='mb-3'>
                                Javascript is a programming language that is used for writing scripts on the website. NodeJS is a Javascript runtime environment.
                            </li>
                            <li className='mb-3'>
                                Javascript can only be run in the browsers. We can run Javascript outside the browser with the help of NodeJS.
                            </li>
                            <li className='mb-3'>
                                Javascript is basically used on the client-side. NodeJS is mostly used on the server-side.
                            </li>
                            <li className='mb-3'>
                                Javascript is capable enough to add HTML and play with the DOM. Nodejs does not have capability to add HTML tags.
                            </li>
                            <li className='mb-3'>
                                Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. V8 is the Javascript engine inside of node.js that parses and runs Javascript.
                            </li>
                            <li className='mb-3'>
                                Some of the javascript frameworks are RamdaJS, TypedJS, etc. Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm.
                            </li>
                            <li>
                                It is the upgraded version of ECMA script that uses Chrome's V8 engine written in C++. Nodejs is written in C, C++ and Javascript.
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row className='mb-5'>
                    <Col className='shadow py-5 px-5 mx-3 mb-5'>
                        <h3 className='text-center mb-5'>How does NodeJS handle multiple requests at the same time?</h3>
                        <p style={{ textAlign: 'justify' }}>
                            <span className='fw-bold fs-5 d-inline-block mb-2'>NodeJS Handle Multiple Requests At The Same Time: </span><br />Given a NodeJS application, since Node is single threaded, say if processing involves a Promise.all that takes 8 seconds, does this mean that the client request that comes after this request would need to wait for eight seconds?
                            No. NodeJS event loop is single threaded. The entire server architecture for NodeJS is not single threaded. Before getting into the Node server architecture, to take a look at typical multithreaded request response model, the web server would have multiple threads and when concurrent requests get to the webserver, the webserver picks threadOne from the threadPool and threadOne processes requestOne and responds to clientOne and when the second request comes in, the web server picks up the second thread from the threadPool and picks up requestTwo and processes it and responds to clientTwo. threadOne is responsible for all kinds of operations that requestOne demanded including doing any blocking IO operations.
                        </p>
                        <p style={{ textAlign: 'justify' }}>
                            The fact that the thread needs to wait for blocking IO operations is what makes it inefficient. With this kind of a model, the webserver is only able to serve as much requests as there are threads in the thread pool. NodeJS Web Server maintains a limited Thread Pool to provide services to client requests. Multiple clients make multiple requests to the NodeJS server. NodeJS receives these requests and places them into the EventQueue. NodeJS server has an internal component referred to as the EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded. In other words, EventLoop is the listener for the EventQueue. So, we have an event queue where the requests are being placed and we have an event loop listening to these requests in the event queue. What happens next?
                        </p>
                        <p style={{ textAlign: 'justify' }}>
                            The listener(the event loop) processes the request and if it is able to process the request without needing any blocking IO operations, then the event loop would itself process the request and sends the response back to the client by itself. If the current request uses blocking IO operations, the event loop sees whether there are threads available in the thread pool, picks up one thread from the thread pool and assigns the particular request to the picked thread. That thread does the blocking IO operations and sends the response back to the event loop and once the response gets to the event loop, the event loop sends the response back to the client. How is NodeJS better than traditional multithreaded request response model? With traditional multithreaded request/response model, every client gets a different thread where as with NodeJS, the simpler request are all handled directly by the EventLoop. This is an optimization of thread pool resources and there is no overhead of creating the threads for every client request.
                        </p>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div>
    )
}

export default Blogs