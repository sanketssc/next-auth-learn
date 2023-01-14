import Head from 'next/head'
import {useState} from 'react'
import Layout from '../layout/layout';
import Link from "next/link";
import styles from "../styles/Form.module.css";
import { HiAtSymbol, HiFingerPrint,HiUser } from "react-icons/hi";

function Register() {

    const [show, setShow] = useState({ password: false, cpassword: false});
  return (
    <Layout>
    <Head>
        <title>Register</title>
    </Head>
    <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="">
          <h1 className="text-gray-800 text-4xl font-bold py-4 ">Register</h1>
          <p className="w-3/4 mx-auto text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            amet consequuntur quam eius alias dolorum.
          </p>
        </div>

        <form className="flex flex-col gap-5">
        <div className={styles.input_group}>
            <input
              type="text"
              name="Username"
              placeholder="Username"
              className={styles.input_text}
            />
            <span className="icon flex items-center px-4">
              <HiUser size={25}/>
            </span>
          </div>
          <div className={styles.input_group}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={styles.input_text}
            />
            <span className="icon flex items-center px-4">
              <HiAtSymbol size={25}/>
            </span>
          </div>
          <div className={styles.input_group}>
            <input
              type={show.password ? "text" : "password"}
              name="password"
              placeholder="Password"
              className={styles.input_text}
            />
            <span className="icon flex items-center px-4 hover:text-[#6366f1] hover:cursor-pointer" onClick={() => setShow({...show, password:!show.password})}>
              <HiFingerPrint size={25} />
            </span>
          </div>
          <div className={styles.input_group}>
            <input
              type={show.cpassword ? "text" : "password"}
              name="cpassword"
              placeholder="Confirm Password"
              className={styles.input_text}
            />
            <span className="icon flex items-center px-4 hover:text-[#6366f1] hover:cursor-pointer" onClick={() => setShow({...show, cpassword:!show.cpassword})}>
              <HiFingerPrint size={25} />
            </span>
          </div>

          <div className="input-button">
            <button type="submit" className={styles.button}>
              Login
            </button>
          </div>
          {/* <div className="input-button">
            <button type="button" className={styles.button_custom}>
              Sign in with Google
            </button>
          </div>
          <div className="input-button">
            <button type="button" className={styles.button_custom}>
              Sign in with Github
            </button>
          </div> */}
        </form>
        <p className="text-center text-gray-400">
          Have an Account?{" "} 
          <Link href={"/login"} className="text-blue-500">
            Sign In
          </Link>
        </p>
      </section>
    </Layout>
  )
}

export default Register