import { Form } from 'react-bootstrap'

export const Config = () => {
  return (
    <main id="main" className="main ">
      <div className="col-lg-6 col-md-8 d-flex flex-column align-items-center justify-content-center">

        <div className="card mb-3" >
          <div className="card-body">
            <div className="pt-4 pb-2">
              <h5 className="card-title text-center pb-0 fs-4">
                Información personal del paciente
              </h5>
              <p className="text-center small">
                Complete la siguiente información personal
              </p>
            </div>
            {/* <p>If your form layout allows its, you can swap the <code>.{valid|invalid}-feedback</code> classes for .<code>{valid|invalid}-tooltip</code> classes to display validation feedback in a styled tooltip. Be sure to have a parent with <code>position: relative</code> on it for tooltip positioning. In the example below, our column classes have this already, but your project may require an alternative setup. </p> */}

            {/* <!-- Custom Styled Validation with Tooltips --> */}
            <Form className="row g-3 needs-validation" noValidate>
              <div className="col-md-12 position-relative">

                <Form.Group controlId="nombreUsuario">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    className="form-control"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Nombre es obligatorio
                  </Form.Control.Feedback>
                </Form.Group>
              </div>
              <div className="col-12">
                <Form.Group controlId="correoUsuario">
                  <Form.Label>Correo electrónico</Form.Label>
                  <div className="input-group has-validation">
                    <span className="input-group-text">@</span>
                    <Form.Control
                      required
                      type="email"
                      name="correoUsuario"
                      className="form-control"
                    // value={correoUsuario}
                    // onChange={dobleEnlace}
                    />
                    <Form.Control.Feedback type="invalid">
                      correo electrónico es obligatorio
                    </Form.Control.Feedback>
                  </div>
                </Form.Group>
              </div>
              <div className="col-12">
                <Form.Group controlId="claveUsuario">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    required
                    type="password"
                    name="claveUsuario"
                    className="form-control"
                    minLength={4}
                    // value={claveUsuario}
                    // onChange={dobleEnlace}
                  />
                  <Form.Control.Feedback type="invalid">
                    Mínimo 4 caracteres
                  </Form.Control.Feedback>
                </Form.Group>
              </div>
              <div className="col-12">
                          <Form.Group controlId="reClaveUsuario">
                            <Form.Label>Confirmar contraseña</Form.Label>
                            <Form.Control
                              required
                              type="password"
                              name="reClaveUsuario"
                              className="form-control"
                              // pattern={claveUsuario}
                            />
                            <Form.Control.Feedback type="invalid">
                              Contraseñas no coindicen
                            </Form.Control.Feedback>
                          </Form.Group>
                        </div>

                        <div className="col-12">
                          <button
                            className="btn btn-primary w-100"
                            type="submit"
                          >
                            Actualizar Infomación
                          </button>
                        </div>

              {/* <label for="validationTooltip01" className="form-label">First name</label>
                  <input type="text" className="form-control" id="validationTooltip01" value="John" required>
                  <div className="valid-tooltip">
                    Looks good!
                  </div>
                </div>
                <div className="col-md-4 position-relative">
                  <label for="validationTooltip02" className="form-label">Last name</label>
                  <input type="text" className="form-control" id="validationTooltip02" value="Doe" required>
                  <div className="valid-tooltip">
                    Looks good!
                  </div>
                </div>
                <div className="col-md-4 position-relative">
                  <label for="validationTooltipUsername" className="form-label">Username</label>
                  <div className="input-group has-validation">
                    <span className="input-group-text" id="validationTooltipUsernamePrepend">@</span>
                    <input type="text" className="form-control" id="validationTooltipUsername" aria-describedby="validationTooltipUsernamePrepend" required>
                    <div className="invalid-tooltip">
                      Please choose a unique and valid username.
                    </div>
                  </div>
                </div>
                <div className="col-md-6 position-relative">
                  <label for="validationTooltip03" className="form-label">City</label>
                  <input type="text" className="form-control" id="validationTooltip03" required>
                  <div className="invalid-tooltip">
                    Please provide a valid city.
                  </div>
                </div>
                <div className="col-md-3 position-relative">
                  <label for="validationTooltip04" className="form-label">State</label>
                  <select className="form-select" id="validationTooltip04" required>
                    <option selected disabled value="">Choose...</option>
                    <option>...</option>
                  </select>
                  <div className="invalid-tooltip">
                    Please select a valid state.
                  </div>
                </div>
                <div className="col-md-3 position-relative">
                  <label for="validationTooltip05" className="form-label">Zip</label>
                  <input type="text" className="form-control" id="validationTooltip05" required>
                  <div className="invalid-tooltip">
                    Please provide a valid zip.
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary" type="submit">Submit form</button>
                </div> */}
            </Form>

          </div>
        </div>
      </div>
    </main>
  )
}
