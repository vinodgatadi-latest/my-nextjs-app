'use client';

import { useEffect, useState } from 'react';
import { executeApi } from '../../services/external.service';


export default function HomePage() {

  const [method, setMethod] = useState('GET');

  const [url, setUrl] = useState('');

  const [body, setBody] = useState('');

  const [response, setResponse] = useState<any>(null);

  const [loading, setLoading] = useState(false);

  const [services, setServices] = useState<any[]>([]);

  const [selectedService, setSelectedService] = useState('');

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetch('/api/services')
      .then(res => res.json())
      .then(data => setServices(data));

  }, []);

  const sendRequest = async () => {

    try {

      setLoading(true);
      const fullUrl =
        `${selectedService}${url}`;

      console.log('\n fullUrl...' + fullUrl);

      const result = await executeApi(
        method,
        fullUrl,
        body ? JSON.parse(body) : undefined
      );

      setResponse(result);

    } catch (error: any) {

      setResponse({
        error: error.message,
      });

    } finally {

      setLoading(false);

    }
  };

  const clearResponse = () => {
    setResponse(null);
    setCopied(false);
  };

  const copyResponse = async () => {
    if (!response) return;

    await navigator.clipboard.writeText(
      JSON.stringify(response, null, 2)
    );

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="container mt-4">

      <div className="card shadow">

        <div className="card-header">
          <h4>
            API Explorer
          </h4>
        </div>


        <div className="card-body">

          <div className="row mb-3">

            <div className="col-md-2">

              <select
                className="form-select"
                value={method}
                onChange={
                  e => setMethod(e.target.value)
                }
              >

                <option>GET</option>
                <option>POST</option>
                <option>PUT</option>
                <option>DELETE</option>

              </select>

            </div>


            <div className="col-md-2">

              <select
                className="form-select"
                value={selectedService}
                onChange={e =>
                  setSelectedService(e.target.value)
                }
              >

                <option value="">
                  Select Service
                </option>


                {
                  services.map(service => (
                    <option
                      key={service.name}
                      value={service.uri}
                    >
                      {service.name}
                    </option>
                  ))
                }

              </select>
            </div>

            <div className="col-md-8">

              <input
                className="form-control"
                placeholder="Enter API URL"
                value={url}
                onChange={
                  e => setUrl(e.target.value)
                }
              />

            </div>

          </div>


          {
            method !== 'GET' &&
            <div className="mb-3">

              <label>
                Request Body
              </label>

              <textarea
                className="form-control"
                rows={5}
                value={body}
                onChange={
                  e => setBody(e.target.value)
                }
                placeholder='{"key":"value"}'
              />

            </div>
          }

          <button
            className="btn btn-primary"
            onClick={sendRequest}
            disabled={loading}
          >

            {
              loading
                ? 'Sending...'
                : 'Send'
            }

          </button>

        </div>

      </div>


      {
        response && (
          <div className="card mt-4 shadow">

            <div className="card-header d-flex justify-content-between align-items-center">

              <span>
                Response
              </span>

              <div>

                <button
                  className="btn btn-sm btn-outline-secondary me-2"
                  onClick={clearResponse}
                >
                  Clear
                </button>

                <button
                  className="btn btn-sm btn-outline-primary"
                  onClick={copyResponse}
                >
                  {copied ? 'Copied!' : 'Copy JSON'}
                </button>

              </div>

            </div>


            <div className="card-body">

              <pre
                className="bg-light p-3 rounded"
                style={{
                  maxHeight: '500px',
                  overflow: 'auto',
                  whiteSpace: 'pre-wrap'
                }}
              >
                {
                  JSON.stringify(
                    response,
                    null,
                    2
                  )
                }
              </pre>

            </div>

          </div>
        )
      }


    </div>
  );
}