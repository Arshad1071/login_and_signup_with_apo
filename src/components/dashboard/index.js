import React from "react";
import { IconBrandGithub } from "@tabler/icons";
import { useSelector } from "react-redux";

const Dashboard = () => {

  const user = useSelector((user) => user.currentReducer);

  return (
    
    <div>
      <div className="wrapper">
        <header className="navbar navbar-expand-md navbar-light d-print-none">
          <div className="container-xl">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbar-menu"
            >
              <span className="navbar-toggler-icon"> </span>
            </button>
            Hi {user.name}
            <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
              {" "}
            </h1>
            <div className="navbar-nav flex-row order-md-last">
              <div className="nav-item d-none d-md-flex me-3">
                <div className="btn-list">
                  <a
                    href="https://github.com/tabler/tabler"
                    className="btn btn-outline-white"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IconBrandGithub />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon text-github"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                    </svg>
                    Source code
                  </a>
                  <a
                    href="https://github.com/sponsors/codecalm"
                    className="btn btn-outline-white"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IconBrandGithub />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon text-pink"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                    </svg>
                    Sponsor
                  </a>
                  <a
                    href="/dashboard/#"
                    className="btn btn-outline-white"
                    style={{ }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-logout"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor" l
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
                      <path d="M7 12h14l-3 -3m0 6l3 -3"></path>
                    </svg>
                    Logout
                  </a>
                </div>
              </div>
              <div className="nav-item dropdown d-none d-md-flex me-3">
                <div className="dropdown-menu dropdown-menu-end dropdown-menu-card">
                  <div className="card">
                    <div className="card-body">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Accusamus ad amet consectetur exercitationem fugiat in
                      ipsa ipsum, natus odio quidem quod repudiandae sapiente.
                      Amet debitis et magni maxime necessitatibus ullam.
                    </div>
                  </div>
                </div>
              </div>
              <div className="nav-item dropdown">
                <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow"></div>
              </div>
            </div>
          </div>
        </header>
        <div className="page-wrapper">
          <div className="container-xl">
            <div className="row align-items-center">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Invoices</h3>
                  </div>

                  <div className="card-body border-bottom py-3">
                    <div className="d-flex">
                      <div className="d-flex">
                        how
                        <div className="mx-2 d-inline-block">
                          <input
                            type="text"
                            className="form-control form-control-sm"
                            value="8"
                            size="3"
                            aria-label="Invoices count"
                          ></input>
                        </div>
                        entries
                      </div>

                      <div className="ms-auto text-muted">
                        Search:
                        <div className="ms-2 d-inline-block">
                          <input
                            type="text"
                            className="form-control form-control-sm"
                            aria-label="Search invoice"
                          ></input>
                        </div>
                      </div>
                    </div>
                    <div className="table-responsive">
                      <table className="table card-table table-vcenter text-nowrap datatable">
                        <thead>
                          <tr>
                            <th className="w-1">
                              <input
                                className="form-check-input m-0 align-middle"
                                type="checkbox"
                                aria-label="Select all invoices"
                              ></input>{" "}
                            </th>
                            <th className="w-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-chevron-up"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                ></path>
                                <polyline points="6 15 12 9 18 15"></polyline>
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-sm text-dark icon-thick"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <polyline points="6 15 12 9 18 15" />
                              </svg>
                            </th>
                            <th>Invoice Subject</th>
                            <th>Client</th>
                            <th>VAT No.</th>
                            <th>Created</th>
                            <th>Status</th>
                            <th>Price</th>
                            <th></th>
                          </tr>
                          <tr>
                            <td>
                              <input
                                className="form-check-input m-0 align-middle"
                                type="checkbox"
                                aria-label="Select invoice"
                              ></input>
                            </td>
                            <td>
                              <span className="text-muted">001404</span>
                            </td>
                            <td style={{ textAlign: "left" }}>
                              <a
                                href="invoice.html"
                                className="text-reset"
                                tabIndex="-1"
                              >
                                Landing Page
                              </a>
                            </td>
                            <td style={{ textAlign: "left" }}>
                              <span className="flag flag-country-in"></span>
                              Salesforce
                            </td>
                            <td>87953421</td>
                            <td>2 Sep 2017</td>
                            <td>
                              <span className="badge bg-secondary me-1"></span>{" "}
                              Due in 2 Weeks
                            </td>
                            <td>$1500</td>
                          </tr>
                          <tr>
                            <td>
                              <input
                                className="form-check-input m-0 align-middle"
                                type="checkbox"
                                aria-label="Select invoice"
                              ></input>
                            </td>
                            <td>
                              <span className="text-muted">001405</span>
                            </td>
                            <td style={{ textAlign: "left" }}>
                              <a
                                href="invoice.html"
                                className="text-reset"
                                tabIndex="-1"
                              >
                                Marketing Templates
                              </a>
                            </td>
                            <td style={{ textAlign: "left" }}>
                              <span className="flag flag-country-pl"></span>
                              Printic
                            </td>
                            <td>87956621</td>

                            <td>29 Jan 2018</td>

                            <td>
                              <span className="badge bg-danger me-1"></span>{" "}
                              Paid Today
                            </td>

                            <td>$648</td>
                          </tr>
                          <tr>
                            <td>
                              <input
                                className="form-check-input m-0 align-middle"
                                type="checkbox"
                                aria-label="Select invoice"
                              ></input>
                            </td>
                            <td>
                              <span className="text-muted">001406</span>
                            </td>
                            <td style={{ textAlign: "left" }}>
                              <a
                                href="invoice.html"
                                className="text-reset"
                                tabIndex="-1"
                              >
                                Sales Presentation
                              </a>
                            </td>
                            <td style={{ textAlign: "left" }}>
                              <span className="flag flag-country-br"></span>
                              Tabdaq
                            </td>
                            <td>87956621</td>
                            <td>4 Feb 2018</td>
                            <td>
                              <span className="badge bg-secondary me-1"></span>{" "}
                              Due in 3 Weeks
                            </td>

                            <td>$300</td>
                          </tr>
                          <tr>
                            <td>
                              <input
                                className="form-check-input m-0 align-middle"
                                type="checkbox"
                                aria-label="Select invoice"
                              ></input>
                            </td>
                            <td>
                              <span className="text-muted">001407</span>
                            </td>
                            <td style={{ textAlign: "left" }}>
                              <a
                                href="invoice.html"
                                className="text-reset"
                                tabIndex="-1"
                              >
                                Logo & Print
                              </a>
                            </td>
                            <td style={{ textAlign: "left" }}>
                              <span className="flag flag-country-us"></span>
                              Apple
                            </td>
                            <td>87956621</td>
                            <td>22 Mar 2018</td>
                            <td>
                              <span className="badge bg-success me-1"></span>{" "}
                              Paid Today
                            </td>
                            <td>$2500</td>
                          </tr>
                          <tr>
                            <td>
                              <input
                                className="form-check-input m-0 align-middle"
                                type="checkbox"
                                aria-label="Select invoice"
                              ></input>
                            </td>
                            <td>
                              <span className="text-muted">001408</span>
                            </td>
                            <td style={{ textAlign: "left" }}>
                              <a
                                href="invoice.html"
                                className="text-reset"
                                tabIndex="-1"
                              >
                                Icons
                              </a>
                            </td>
                            <td style={{ textAlign: "left" }}>
                              <span className="flag flag-country-pl"></span>
                              Tookapic
                            </td>
                            <td>87956621</td>
                            <td>13 May 2018</td>
                            <td>
                              <span className="badge bg-success me-1"></span>{" "}
                              Paid Today
                            </td>
                            <td>$940</td>
                          </tr>
                        </thead>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
