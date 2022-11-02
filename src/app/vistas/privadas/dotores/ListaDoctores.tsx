import fotoTripulante from '../../../../assets/image/doctors/01.jpg';
import doct2 from '../../../../assets/image/doctors/02.jpg';
import doct3 from '../../../../assets/image/doctors/03.jpg';
import doct4 from '../../../../assets/image/doctors/04.jpg';
import doct5 from '../../../../assets/image/doctors/05.jpg';
import doct6 from '../../../../assets/image/doctors/06.jpg';
import doct7 from '../../../../assets/image/doctors/07.jpg';
import doct8 from '../../../../assets/image/doctors/08.jpg';
import doct9 from '../../../../assets/image/doctors/09.jpg';

const data = [
  {name:'Julie Rosario',speciality:'Psychotherapy',img:doct3},
  {name:'Calvin Carlo',speciality:'Urologist',img:doct2},
  {name:'Cristino Murphy',speciality:'Eye Care',img:doct4},
  {name:'Alia Reddy',speciality:'Orthopedic',img:doct5},
  {name:'Toni Kovar',speciality:'Dentist',img:fotoTripulante},
  {name:'Jessica McFarlane',speciality:'Gastrologist',img:doct7},
  {name:'Elsie Sherman',speciality:'Gynecology',img:doct8},
  {name:'Bertha Magers',speciality:'Neurologist',img:doct9},
  {name:'Samantha Potter',speciality:'Nutritionists',img:doct6},
];
export const ListaDoctores = () => {
  return (
    <main id="main" className="main page-content bg-light">
      <div className="container-fluid">
        <div className="layout-specing">
          <div className="row">
            <div className="col-xl-9 col-md-6 title-left">
              <h5 className="mb-0">Doctores</h5>

              <nav aria-label="breadcrumb" className="d-inline-block mt-2">
                <ul className="breadcrumb breadcrumb-muted bg-transparent rounded mb-0 p-0">
                  <li className="breadcrumb-item"><a href="/#">InfoMedic</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Doctores</li>
                </ul>
              </nav>
            </div>
            <div className="col-xl-3 col-md-6 mt-4 mt-md-0 text-md-end">
              {/* //Todo: programar boton agregar doctor */}
              <a href="add-doctor.html" className="btn btn-primary">Agregar Doctor</a>
            </div>
          </div>
          {/*  //Todo: doctores */}
          <div className="row row-cols-md-2 row-cols-lg-5">
            {
              data.map(doc => <div className="col mt-4" key={doc.name}>
              <div className="card team border-0 rounded shadow overflow-hidden">
                <div className="team-img position-relative">
                  <img src={doc.img} className="img-fluid" alt="" />
                  <ul className="list-unstyled team-social mb-0">
                    <li><a href="index.html" className="btn btn-icon btn-pills btn-soft-primary"><i className="bi bi-facebook "></i></a></li>
                    <li className="mt-2"><a href="index.html" className="btn btn-icon btn-pills btn-soft-primary"><i className="bi bi-twitter"></i></a></li>
                    <li className="mt-2"><a href="index.html" className="btn btn-icon btn-pills btn-soft-primary"><i className="bi bi-linkedin"></i></a></li>
                    <li className="mt-2"><a href="index.html" className="btn btn-icon btn-pills btn-soft-primary"><i className="bi bi-instagram"></i></a></li>
                  </ul>
                </div>
                <div className="card-body content text-center">
                  <a href="dr-profile.html" className="title text-dark h5 d-block mb-0">{doc.name}</a>
                  <small className="text-muted speciality">{doc.speciality}</small>
                </div>
              </div>
            </div>)
            }
            {/* <div className="col mt-4">
              <div className="card team border-0 rounded shadow overflow-hidden">
                <div className="team-img position-relative">
                  <img src={fotoTripulante} className="img-fluid" alt="" />
                  <ul className="list-unstyled team-social mb-0">
                    <li><a href="index.html" className="btn btn-icon btn-pills btn-soft-primary"><i className="bi bi-facebook"></i></a></li>
                    <li className="mt-2"><a href="index.html" className="btn btn-icon btn-pills btn-soft-primary"><i className="bi bi-twitter"></i></a></li>
                    <li className="mt-2"><a href="index.html" className="btn btn-icon btn-pills btn-soft-primary"><i className="bi bi-linkedin"></i></a></li>
                    <li className="mt-2"><a href="index.html" className="btn btn-icon btn-pills btn-soft-primary"><i className="bi bi-instagram"></i></a></li>
                  </ul>
                </div>
                <div className="card-body content text-center">
                  <a href="dr-profile.html" className="title text-dark h5 d-block mb-0">Calvin Carlo</a>
                  <small className="text-muted speciality">Eye Care</small>
                </div>
              </div>
            </div>
            
            <div className="col mt-4">
              <div className="card team border-0 rounded shadow overflow-hidden">
                <div className="team-img position-relative">
                  <img src={doct2} className="img-fluid" alt="" />
                  <ul className="list-unstyled team-social mb-0">
                    <li><a href="index.html" className="btn btn-icon btn-pills btn-soft-primary"><i className="bi bi-facebook"></i></a></li>
                    <li className="mt-2"><a href="index.html" className="btn btn-icon btn-pills btn-soft-primary"><i className="bi bi-twitter"></i></a></li>
                    <li className="mt-2"><a href="index.html" className="btn btn-icon btn-pills btn-soft-primary"><i className="bi bi-linkedin"></i></a></li>
                    <li className="mt-2"><a href="index.html" className="btn btn-icon btn-pills btn-soft-primary"><i className="bi bi-instagram"></i></a></li>
                  </ul>
                </div>
                <div className="card-body content text-center">
                  <a href="dr-profile.html" className="title text-dark h5 d-block mb-0">Calvin Carlo</a>
                  <small className="text-muted speciality">Psychotherapy</small>
                </div>
              </div>
            </div>
            
            <div className="col mt-4">
              <div className="card team border-0 rounded shadow overflow-hidden">
                <div className="team-img position-relative">
                  <img src={doct3} className="img-fluid" alt="" />
                  <ul className="list-unstyled team-social mb-0">
                    <li><a href="index.html" className="btn btn-icon btn-pills btn-soft-primary"><i className="bi bi-facebook"></i></a></li>
                    <li className="mt-2"><a href="index.html" className="btn btn-icon btn-pills btn-soft-primary"><i className="bi bi-twitter"></i></a></li>
                    <li className="mt-2"><a href="index.html" className="btn btn-icon btn-pills btn-soft-primary"><i className="bi bi-linkedin"></i></a></li>
                    <li className="mt-2"><a href="index.html" className="btn btn-icon btn-pills btn-soft-primary"><i className="bi bi-instagram"></i></a></li>
                  </ul>
                </div>
                <div className="card-body content text-center">
                  <a href="dr-profile.html" className="title text-dark h5 d-block mb-0">Calvin Carlo</a>
                  <small className="text-muted speciality">Psychotherapy</small>
                </div>
              </div>
            </div>

            <div className="col mt-4">
              <div className="card team border-0 rounded shadow overflow-hidden">
                <div className="team-img position-relative">
                  <img src={doct4} className="img-fluid" alt="" />
                  <ul className="list-unstyled team-social mb-0">
                    <li><a href="index.html" className="btn btn-icon btn-pills btn-soft-primary"><i className="bi bi-facebook"></i></a></li>
                    <li className="mt-2"><a href="index.html" className="btn btn-icon btn-pills btn-soft-primary"><i className="bi bi-twitter"></i></a></li>
                    <li className="mt-2"><a href="index.html" className="btn btn-icon btn-pills btn-soft-primary"><i className="bi bi-linkedin"></i></a></li>
                    <li className="mt-2"><a href="index.html" className="btn btn-icon btn-pills btn-soft-primary"><i className="bi bi-instagram"></i></a></li>
                  </ul>
                </div>
                <div className="card-body content text-center">
                  <a href="dr-profile.html" className="title text-dark h5 d-block mb-0">Calvin Carlo</a>
                  <small className="text-muted speciality">Psychotherapy</small>
                </div>
              </div>
            </div>
            
            <div className="col mt-4">
              <div className="card team border-0 rounded shadow overflow-hidden">
                <div className="team-img position-relative">
                  <img src={doct5} className="img-fluid" alt="" />
                  <ul className="list-unstyled team-social mb-0">
                    <li><a href="index.html" className="btn btn-icon btn-pills btn-soft-primary"><i className="bi bi-facebook"></i></a></li>
                    <li className="mt-2"><a href="index.html" className="btn btn-icon btn-pills btn-soft-primary"><i className="bi bi-twitter"></i></a></li>
                    <li className="mt-2"><a href="index.html" className="btn btn-icon btn-pills btn-soft-primary"><i className="bi bi-linkedin"></i></a></li>
                    <li className="mt-2"><a href="index.html" className="btn btn-icon btn-pills btn-soft-primary"><i className="bi bi-instagram"></i></a></li>
                  </ul>
                </div>
                <div className="card-body content text-center">
                  <a href="dr-profile.html" className="title text-dark h5 d-block mb-0">Calvin Carlo</a>
                  <small className="text-muted speciality">Psychotherapy</small>
                </div>
              </div>
            </div>
            
            <div className="col mt-4">
              <div className="card team border-0 rounded shadow overflow-hidden">
                <div className="team-img position-relative">
                  <img src={doct6} className="img-fluid" alt="" />
                  <ul className="list-unstyled team-social mb-0">
                    <li><a href="index.html" className="btn btn-icon btn-pills btn-soft-primary"><i className="bi bi-facebook"></i></a></li>
                    <li className="mt-2"><a href="index.html" className="btn btn-icon btn-pills btn-soft-primary"><i className="bi bi-twitter"></i></a></li>
                    <li className="mt-2"><a href="index.html" className="btn btn-icon btn-pills btn-soft-primary"><i className="bi bi-linkedin"></i></a></li>
                    <li className="mt-2"><a href="index.html" className="btn btn-icon btn-pills btn-soft-primary"><i className="bi bi-instagram"></i></a></li>
                  </ul>
                </div>
                <div className="card-body content text-center">
                  <a href="dr-profile.html" className="title text-dark h5 d-block mb-0">Calvin Carlo</a>
                  <small className="text-muted speciality">Psychotherapy</small>
                </div>
              </div>
            </div>

            <div className="col mt-4">
              <div className="card team border-0 rounded shadow overflow-hidden">
                <div className="team-img position-relative">
                  <img src={doct7} className="img-fluid" alt="" />
                  <ul className="list-unstyled team-social mb-0">
                    <li><a href="index.html" className="btn btn-icon btn-pills btn-soft-primary"><i className="bi bi-facebook"></i></a></li>
                    <li className="mt-2"><a href="index.html" className="btn btn-icon btn-pills btn-soft-primary"><i className="bi bi-twitter"></i></a></li>
                    <li className="mt-2"><a href="index.html" className="btn btn-icon btn-pills btn-soft-primary"><i className="bi bi-linkedin"></i></a></li>
                    <li className="mt-2"><a href="index.html" className="btn btn-icon btn-pills btn-soft-primary"><i className="bi bi-instagram"></i></a></li>
                  </ul>
                </div>
                <div className="card-body content text-center">
                  <a href="dr-profile.html" className="title text-dark h5 d-block mb-0">Calvin Carlo</a>
                  <small className="text-muted speciality">Psychotherapy</small>
                </div>
              </div>
            </div>

            <div className="col mt-4">
              <div className="card team border-0 rounded shadow overflow-hidden">
                <div className="team-img position-relative">
                  <img src={doct8} className="img-fluid" alt="" />
                  <ul className="list-unstyled team-social mb-0">
                    <li><a href="index.html" className="btn btn-icon btn-pills btn-soft-primary"><i className="bi bi-facebook"></i></a></li>
                    <li className="mt-2"><a href="index.html" className="btn btn-icon btn-pills btn-soft-primary"><i className="bi bi-twitter"></i></a></li>
                    <li className="mt-2"><a href="index.html" className="btn btn-icon btn-pills btn-soft-primary"><i className="bi bi-linkedin"></i></a></li>
                    <li className="mt-2"><a href="index.html" className="btn btn-icon btn-pills btn-soft-primary"><i className="bi bi-instagram"></i></a></li>
                  </ul>
                </div>
                <div className="card-body content text-center">
                  <a href="dr-profile.html" className="title text-dark h5 d-block mb-0">Calvin Carlo</a>
                  <small className="text-muted speciality">Psychotherapy</small>
                </div>
              </div>
            </div>
            <div className="col mt-4">
              <div className="card team border-0 rounded shadow overflow-hidden">
                <div className="team-img position-relative">
                  <img src={doct9} className="img-fluid" alt="" />
                  <ul className="list-unstyled team-social mb-0">
                    <li><a href="index.html" className="btn btn-icon btn-pills btn-soft-primary"><i className="bi bi-facebook"></i></a></li>
                    <li className="mt-2"><a href="index.html" className="btn btn-icon btn-pills btn-soft-primary"><i className="bi bi-twitter"></i></a></li>
                    <li className="mt-2"><a href="index.html" className="btn btn-icon btn-pills btn-soft-primary"><i className="bi bi-linkedin"></i></a></li>
                    <li className="mt-2"><a href="index.html" className="btn btn-icon btn-pills btn-soft-primary"><i className="bi bi-instagram"></i></a></li>
                  </ul>
                </div>
                <div className="card-body content text-center">
                  <a href="dr-profile.html" className="title text-dark h5 d-block mb-0">Calvin Carlo</a>
                  <small className="text-muted speciality">Psychotherapy</small>
                </div>
              </div>
            </div> */}
            
          </div>
        </div>
        
      </div>
    </main>
  )
}
