import React from "react";
import "./doctorhome.css";
import Doctorprofile from "../doctorprofile/doctorprofile";
export default function doctorhome() {
  return (
    <div className="doctorhome">
      <Doctorprofile />
      <div className="doctorhome__right">
        <div className="doctorhome__right__top">
          <div className="image"> </div>
          <div className="details">
            <div className="name">Dr. Sagar kumar singh</div>
            <div className="designation">DESCRIPTION......</div>
          </div>
          <div className="call">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M373.1 24.97C401.2-3.147 446.8-3.147 474.9 24.97L487 37.09C515.1 65.21 515.1 110.8 487 138.9L289.8 336.2C281.1 344.8 270.4 351.1 258.6 354.5L158.6 383.1C150.2 385.5 141.2 383.1 135 376.1C128.9 370.8 126.5 361.8 128.9 353.4L157.5 253.4C160.9 241.6 167.2 230.9 175.8 222.2L373.1 24.97zM440.1 58.91C431.6 49.54 416.4 49.54 407 58.91L377.9 88L424 134.1L453.1 104.1C462.5 95.6 462.5 80.4 453.1 71.03L440.1 58.91zM203.7 266.6L186.9 325.1L245.4 308.3C249.4 307.2 252.9 305.1 255.8 302.2L390.1 168L344 121.9L209.8 256.2C206.9 259.1 204.8 262.6 203.7 266.6zM200 64C213.3 64 224 74.75 224 88C224 101.3 213.3 112 200 112H88C65.91 112 48 129.9 48 152V424C48 446.1 65.91 464 88 464H360C382.1 464 400 446.1 400 424V312C400 298.7 410.7 288 424 288C437.3 288 448 298.7 448 312V424C448 472.6 408.6 512 360 512H88C39.4 512 0 472.6 0 424V152C0 103.4 39.4 64 88 64H200z" />
            </svg>
          </div>
        </div>

        <div className="detailsofdoctor">
          <div></div>
          <div className="maincard">
            <div className="maincardhead">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path d="M296 96C296 87.16 303.2 80 312 80H328C336.8 80 344 87.16 344 96V120H368C376.8 120 384 127.2 384 136V152C384 160.8 376.8 168 368 168H344V192C344 200.8 336.8 208 328 208H312C303.2 208 296 200.8 296 192V168H272C263.2 168 256 160.8 256 152V136C256 127.2 263.2 120 272 120H296V96zM408 0C447.8 0 480 32.24 480 72V80H568C607.8 80 640 112.2 640 152V440C640 479.8 607.8 512 568 512H71.98C32.19 512 0 479.8 0 440V152C0 112.2 32.24 80 72 80H160V72C160 32.24 192.2 0 232 0L408 0zM480 128V464H568C581.3 464 592 453.3 592 440V336H536C522.7 336 512 325.3 512 312C512 298.7 522.7 288 536 288H592V240H536C522.7 240 512 229.3 512 216C512 202.7 522.7 192 536 192H592V152C592 138.7 581.3 128 568 128H480zM48 152V192H104C117.3 192 128 202.7 128 216C128 229.3 117.3 240 104 240H48V288H104C117.3 288 128 298.7 128 312C128 325.3 117.3 336 104 336H48V440C48 453.3 58.74 464 71.98 464H160V128H72C58.75 128 48 138.7 48 152V152zM208 464H272V400C272 373.5 293.5 352 320 352C346.5 352 368 373.5 368 400V464H432V72C432 58.75 421.3 48 408 48H232C218.7 48 208 58.75 208 72V464z" />
              </svg>{" "}
              Dr. Sagar kumar singh
            </div>
            <hr />
            <div className="maincardbody">
              {" "}
              Dr.Sagar kumar singh is one of the top Paediatric Nephrologists in
              the region with an experience of 8 years practicing pediatric
              nephrology exclusively. He has been trained at various reputed
              institutes overseas. Dr. Sinha has completed 5 years of higher
              specialist training under London Deanery and obtained dual
              certification in Paediatric Nephrology (CCT). He is actively
              involved in multi-centre studies and has received grants from a
              number of international nephrology societies including the
              European Society of Paediatric Nephrology, the International
              Society of Nephrology, & the American Society of Transplantation.
              <br />
              <br />
            </div>
          </div>
          <div className="maincard">
          <div className="maincardhead short">Doctor ID: </div>
            fbwh25965969
          </div>

          <div className="maincard ">
          <div className="maincardhead short">Speciality: </div>
            <ul>
                <li>Paediatric Nephrology</li>
                <li>Paediatric Oncology</li>
                <li>Paediatric Cardiology</li>
                <li>Paediatric Neurology</li>
            </ul>
          </div>

          <div className="maincard">
          <div className="maincardhead short">Experience: </div>
            8 years
            <ul>
                <li>Apollo hospital</li>
                <li>Fortis hospital</li>
                <li>Max hospital</li>
            </ul>
          </div>

          <div className="maincard">
          <div className="maincardhead short">Rating: </div>
            4.5⭐/5
          </div>

          <div className="maincard">
          <div className="maincardhead short">Consultation fee: </div>
            ₹ 2000
          </div>

          <div className="maincard">
          <div className="maincardhead short">Consultation time: </div>
            30 minutes
          </div>

          <div className="maincard">
          <div className="maincardhead short">Consultation days: </div>
            5 days
          </div>

          <div className="maincard">
          <div className="maincardhead short">Consultation time: </div>
            10:00 AM - 10:00 PM
          </div>
          
        </div>
      </div>
    </div>
  );
}
