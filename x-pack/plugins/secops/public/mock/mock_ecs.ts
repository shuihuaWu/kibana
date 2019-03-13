/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { Ecs } from '../graphql/types';

export const mockEcsData: Ecs[] = [
  {
    _id: '1',
    timestamp: '2018-11-05T19:03:25.937Z',
    host: {
      name: 'apache',
      ip: ['192.168.0.1'],
    },
    event: {
      id: 1,
      action: 'Action',
      category: 'Access',
      module: 'nginx',
      severity: 3,
    },
    source: {
      ip: '192.168.0.1',
      port: 80,
    },
    destination: {
      ip: '192.168.0.3',
      port: 6343,
    },
    user: {
      id: 1,
      name: 'john.dee',
    },
    geo: {
      region_name: 'xx',
      country_iso_code: 'xx',
    },
  },
  {
    _id: '3',
    timestamp: '2018-11-07T19:03:25.937Z',
    host: {
      name: 'nginx',
      ip: ['192.168.0.1'],
    },
    event: {
      id: 3,
      category: 'Access',
      type: 'HTTP Request',
      module: 'nginx',
      severity: 1,
    },
    source: {
      ip: '192.168.0.3',
      port: 443,
    },
    destination: {
      ip: '192.168.0.3',
      port: 6343,
    },
    user: {
      id: 3,
      name: 'evan.davis',
    },
    geo: {
      region_name: 'xx',
      country_iso_code: 'xx',
    },
  },
  {
    _id: '4',
    timestamp: '2018-11-08T19:03:25.937Z',
    host: {
      name: 'suricata',
      ip: ['192.168.0.1'],
    },
    event: {
      id: 4,
      category: 'Attempted Administrator Privilege Gain',
      type: 'Alert',
      module: 'suricata',
      severity: 1,
    },
    source: {
      ip: '192.168.0.3',
      port: 53,
    },
    destination: {
      ip: '192.168.0.3',
      port: 6343,
    },
    suricata: {
      eve: {
        flow_id: 4,
        proto: '',
        alert: {
          signature: 'ET EXPLOIT NETGEAR WNR2000v5 hidden_lang_avi Stack Overflow (CVE-2016-10174)',
          signature_id: 4,
        },
      },
    },
    user: {
      id: 4,
      name: 'jenny.jones',
    },
    geo: {
      region_name: 'xx',
      country_iso_code: 'xx',
    },
  },
  {
    _id: '5',
    timestamp: '2018-11-09T19:03:25.937Z',
    host: {
      name: 'joe.computer',
      ip: ['192.168.0.1'],
    },
    event: {
      id: 5,
      category: 'Access',
      type: 'HTTP Request',
      module: 'nginx',
      severity: 3,
    },
    source: {
      ip: '192.168.0.3',
      port: 80,
    },
    destination: {
      ip: '192.168.0.3',
      port: 6343,
    },
    user: {
      id: 5,
      name: 'becky.davis',
    },
    geo: {
      region_name: 'xx',
      country_iso_code: 'xx',
    },
  },
  {
    _id: '6',
    timestamp: '2018-11-10T19:03:25.937Z',
    host: {
      name: 'braden.davis',
      ip: ['192.168.0.1'],
    },
    event: {
      id: 6,
      category: 'Access',
      type: 'HTTP Request',
      module: 'nginx',
      severity: 3,
    },
    source: {
      ip: '192.168.0.6',
      port: 80,
    },
    destination: {
      ip: '192.168.0.3',
      port: 6343,
    },
    geo: {
      region_name: 'xx',
      country_iso_code: 'xx',
    },
  },
  {
    _id: '8',
    timestamp: '2018-11-12T19:03:25.937Z',
    host: {
      name: 'joe.computer',
      ip: ['192.168.0.1'],
    },
    event: {
      id: 8,
      category: 'Web Application Attack',
      type: 'Alert',
      module: 'suricata',
      severity: 2,
    },
    suricata: {
      eve: {
        flow_id: 8,
        proto: '',
        alert: {
          signature: 'ET WEB_SERVER Possible CVE-2014-6271 Attempt in HTTP Cookie',
          signature_id: 8,
        },
      },
    },
    source: {
      ip: '192.168.0.8',
      port: 80,
    },
    destination: {
      ip: '192.168.0.3',
      port: 6343,
    },
    user: {
      id: 8,
      name: 'jone.doe',
    },
    geo: {
      region_name: 'xx',
      country_iso_code: 'xx',
    },
  },
  {
    _id: '7',
    timestamp: '2018-11-11T19:03:25.937Z',
    host: {
      name: 'joe.computer',
      ip: ['192.168.0.1'],
    },
    event: {
      id: 7,
      category: 'Access',
      type: 'HTTP Request',
      module: 'apache',
      severity: 3,
    },
    source: {
      ip: '192.168.0.7',
      port: 80,
    },
    destination: {
      ip: '192.168.0.3',
      port: 6343,
    },
    user: {
      id: 7,
      name: 'jone.doe',
    },
    geo: {
      region_name: 'xx',
      country_iso_code: 'xx',
    },
  },
  {
    _id: '9',
    timestamp: '2018-11-13T19:03:25.937Z',
    host: {
      name: 'joe.computer',
      ip: ['192.168.0.1'],
    },
    event: {
      id: 9,
      category: 'Access',
      type: 'HTTP Request',
      module: 'nginx',
      severity: 3,
    },
    source: {
      ip: '192.168.0.9',
      port: 80,
    },
    destination: {
      ip: '192.168.0.3',
      port: 6343,
    },
    user: {
      id: 9,
      name: 'jone.doe',
    },
    geo: {
      region_name: 'xx',
      country_iso_code: 'xx',
    },
  },
  {
    _id: '10',
    timestamp: '2018-11-14T19:03:25.937Z',
    host: {
      name: 'joe.computer',
      ip: ['192.168.0.1'],
    },
    event: {
      id: 10,
      category: 'Access',
      type: 'HTTP Request',
      module: 'nginx',
      severity: 3,
    },
    source: {
      ip: '192.168.0.10',
      port: 80,
    },
    destination: {
      ip: '192.168.0.3',
      port: 6343,
    },
    user: {
      id: 10,
      name: 'jone.doe',
    },
    geo: {
      region_name: 'xx',
      country_iso_code: 'xx',
    },
  },
  {
    _id: '11',
    timestamp: '2018-11-15T19:03:25.937Z',
    host: {
      name: 'joe.computer',
      ip: ['192.168.0.1'],
    },
    event: {
      id: 11,
      category: 'Access',
      type: 'HTTP Request',
      module: 'nginx',
      severity: 3,
    },
    source: {
      ip: '192.168.0.11',
      port: 80,
    },
    destination: {
      ip: '192.168.0.3',
      port: 6343,
    },
    user: {
      id: 11,
      name: 'jone.doe',
    },
    geo: {
      region_name: 'xx',
      country_iso_code: 'xx',
    },
  },
  {
    _id: '12',
    timestamp: '2018-11-16T19:03:25.937Z',
    host: {
      name: 'joe.computer',
      ip: ['192.168.0.1'],
    },
    event: {
      id: 12,
      category: 'Access',
      type: 'HTTP Request',
      module: 'nginx',
      severity: 3,
    },
    source: {
      ip: '192.168.0.12',
      port: 80,
    },
    destination: {
      ip: '192.168.0.3',
      port: 6343,
    },
    user: {
      id: 12,
      name: 'jone.doe',
    },
    geo: {
      region_name: 'xx',
      country_iso_code: 'xx',
    },
  },
  {
    _id: '2',
    timestamp: '2018-11-06T19:03:25.937Z',
    host: {
      name: 'joe.computer',
      ip: ['192.168.0.1'],
    },
    event: {
      id: 2,
      category: 'Authentication',
      type: 'Authentication Success',
      module: 'authlog',
      severity: 3,
    },
    source: {
      ip: '192.168.0.2',
      port: 80,
    },
    destination: {
      ip: '192.168.0.3',
      port: 6343,
    },
    user: {
      id: 1,
      name: 'joe.bob',
    },
    geo: {
      region_name: 'xx',
      country_iso_code: 'xx',
    },
  },
  {
    _id: '13',
    timestamp: '2018-13-12T19:03:25.937Z',
    host: {
      name: 'joe.computer',
      ip: ['192.168.0.1'],
    },
    event: {
      id: 13,
      category: 'Web Application Attack',
      type: 'Alert',
      module: 'suricata',
      severity: 1,
    },
    suricata: {
      eve: {
        flow_id: 13,
        proto: '',
        alert: {
          signature: 'ET WEB_SERVER Possible Attempt in HTTP Cookie',
          signature_id: 13,
        },
      },
    },
    source: {
      ip: '192.168.0.8',
      port: 80,
    },
    destination: {
      ip: '192.168.0.3',
      port: 6343,
    },
    geo: {
      region_name: 'xx',
      country_iso_code: 'xx',
    },
  },
  {
    _id: '14',
    timestamp: '2019-03-07T05:06:51.000Z',
    event: {
      action: null,
      severity: null,
      module: 'zeek',
      category: null,
      id: null,
      dataset: 'zeek.connection',
    },
    host: {
      id: '37c81253e0fc4c46839c19b981be5177',
      name: 'zeek-franfurt',
      ip: ['207.154.238.205', '10.19.0.5', 'fe80::d82b:9aff:fe0d:1e12'],
    },
    source: {
      ip: '185.176.26.101',
      port: 44059,
    },
    destination: {
      ip: '207.154.238.205',
      port: 11568,
    },
    geo: {
      region_name: 'New York',
      country_iso_code: 'US',
    },
    suricata: null,
    network: {
      transport: 'tcp',
    },
    http: null,
    url: null,
    zeek: {
      session_id: 'C8DRTq362Fios6hw16',
      connection: {
        local_resp: 'false',
        local_orig: 'false',
        missed_bytes: 0,
        state: 'REJ',
        history: 'Sr',
      },
      notice: null,
      dns: null,
      http: null,
      files: null,
      ssl: null,
    },
  },
  {
    _id: '15',
    timestamp: '2019-03-07T00:51:28.000Z',
    event: {
      action: null,
      severity: null,
      module: 'zeek',
      category: null,
      id: null,
      dataset: 'zeek.dns',
    },
    host: {
      id: 'af3fddf15f1d47979ce817ba0df10c6e',
      name: 'suricata-zeek-singapore',
      ip: ['206.189.35.240', '10.15.0.5', 'fe80::98c7:eff:fe29:4455'],
    },
    source: {
      ip: '206.189.35.240',
      port: 57475,
    },
    destination: {
      ip: '67.207.67.3',
      port: 53,
    },
    geo: {
      region_name: 'New York',
      country_iso_code: 'US',
    },
    suricata: null,
    network: {
      transport: 'udp',
    },
    http: null,
    url: null,
    zeek: {
      session_id: 'CyIrMA1L1JtLqdIuol',
      connection: null,
      notice: null,
      dns: {
        AA: false,
        qclass_name: null,
        RD: false,
        qtype_name: null,
        rejected: null,
        qtype: null,
        query: null,
        trans_id: 65252,
        qclass: null,
        RA: false,
        TC: false,
      },
      http: null,
      files: null,
      ssl: null,
    },
  },
  {
    _id: '16',
    _index: 'filebeat-8.0.0-2019.02.19-000001',
    timestamp: '2019-03-05T07:00:20.000Z',
    event: {
      action: null,
      severity: null,
      module: 'zeek',
      category: null,
      id: null,
      dataset: 'zeek.http',
    },
    host: {
      id: 'af3fddf15f1d47979ce817ba0df10c6e',
      name: 'suricata-zeek-singapore',
      ip: ['206.189.35.240', '10.15.0.5', 'fe80::98c7:eff:fe29:4455'],
    },
    source: {
      ip: '206.189.35.240',
      port: 36220,
    },
    destination: {
      ip: '192.241.164.26',
      port: 80,
    },
    geo: {
      region_name: 'New York',
      country_iso_code: 'US',
    },
    suricata: null,
    network: null,
    http: {
      version: '1.1',
      request: {
        method: null,
        body: {
          bytes: 0,
          content: null,
        },
        referrer: null,
      },
      response: {
        status_code: 302,
        body: {
          bytes: 154,
          content: null,
        },
      },
    },
    url: null,
    zeek: {
      session_id: 'CZLkpC22NquQJOpkwe',
      connection: null,
      notice: null,
      dns: null,
      http: {
        resp_mime_types: ['text/html'],
        trans_depth: '3',
        status_msg: 'Moved Temporarily',
        resp_fuids: ['FzeujEPP7GTHmYPsc'],
        tags: [],
      },
      files: null,
      ssl: null,
    },
  },
  {
    _id: '17',
    timestamp: '2019-02-28T22:36:28.000Z',
    event: {
      action: null,
      severity: null,
      module: 'zeek',
      category: null,
      id: null,
      dataset: 'zeek.notice',
    },
    host: {
      id: '37c81253e0fc4c46839c19b981be5177',
      name: 'zeek-franfurt',
      ip: ['207.154.238.205', '10.19.0.5', 'fe80::d82b:9aff:fe0d:1e12'],
    },
    source: {
      ip: '8.42.77.171',
      port: null,
    },
    destination: null,
    geo: null,
    suricata: null,
    network: null,
    http: null,
    url: null,
    zeek: {
      session_id: null,
      connection: null,
      notice: {
        suppress_for: 3600,
        msg: '8.42.77.171 scanned at least 15 unique ports of host 207.154.238.205 in 0m0s',
        note: 'Scan::Port_Scan',
        sub: 'remote',
        dst: '207.154.238.205',
        dropped: false,
        peer_descr: 'bro',
      },
      dns: null,
      http: null,
      files: null,
      ssl: null,
    },
  },
  {
    _id: '18',
    timestamp: '2019-02-22T21:12:13.000Z',
    event: {
      action: null,
      severity: null,
      module: 'zeek',
      category: null,
      id: null,
      dataset: 'zeek.ssl',
    },
    host: {
      id: '2ce8b1e7d69e4a1d9c6bcddc473da9d9',
      name: 'zeek-sensor-amsterdam',
      ip: null,
    },
    source: {
      ip: '188.166.66.184',
      port: 34514,
    },
    destination: {
      ip: '91.189.95.15',
      port: 443,
    },
    geo: {
      region_name: 'England',
      country_iso_code: 'GB',
    },
    suricata: null,
    network: null,
    http: null,
    url: null,
    zeek: {
      session_id: 'CmTxzt2OVXZLkGDaRe',
      connection: null,
      notice: null,
      dns: null,
      http: null,
      files: null,
      ssl: {
        cipher: 'TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256',
        established: false,
        resumed: false,
        version: 'TLSv12',
      },
    },
  },
  {
    _id: '19',
    timestamp: '2019-03-03T04:26:38.000Z',
    event: {
      action: null,
      severity: null,
      module: 'zeek',
      category: null,
      id: null,
      dataset: 'zeek.files',
    },
    host: {
      id: 'af3fddf15f1d47979ce817ba0df10c6e',
      name: 'suricata-zeek-singapore',
      ip: ['206.189.35.240', '10.15.0.5', 'fe80::98c7:eff:fe29:4455'],
    },
    source: null,
    destination: null,
    geo: null,
    suricata: null,
    network: null,
    http: null,
    url: null,
    zeek: {
      session_id: 'Cu0n232QMyvNtzb75j',
      connection: null,
      notice: null,
      dns: null,
      http: null,
      files: {
        session_ids: ['Cu0n232QMyvNtzb75j'],
        timedout: false,
        local_orig: false,
        tx_host: '5.101.111.50',
        source: 'HTTP',
        is_orig: false,
        overflow_bytes: 0,
        sha1: 'fa5195a5dfacc9d1c68d43600f0e0262cad14dde',
        duration: 0,
        depth: 0,
        analyzers: ['MD5', 'SHA1'],
        mime_type: 'text/plain',
        rx_host: '206.189.35.240',
        total_bytes: 88722,
        fuid: 'FePz1uVEVCZ3I0FQi',
        seen_bytes: 1198,
        missing_bytes: 0,
        md5: 'f7653f1951693021daa9e6be61226e32',
      },
      ssl: null,
    },
  },
  {
    _id: '20',
    timestamp: '2019-03-13T05:42:11.815Z',
    event: {
      action: 'executed',
      severity: null,
      module: 'auditd',
      category: 'audit-rule',
      id: null,
      dataset: null,
    },
    host: {
      id: 'f896741c3b3b44bdb8e351a4ab6d2d7c',
      name: 'zeek-sanfran',
      ip: ['134.209.63.134', '10.46.0.5', 'fe80::a0d9:16ff:fecf:e70b'],
    },
    source: null,
    destination: null,
    geo: null,
    suricata: null,
    network: null,
    http: null,
    url: null,
    user: {
      name: 'johnson',
    },
    process: {
      pid: 5402,
      name: 'gpgconf',
      ppid: 5401,
      args: ['gpgconf', '--list-dirs', 'agent-socket'],
      executable: '/usr/bin/gpgconf',
      title: 'gpgconf --list-dirs agent-socket',
      working_directory: '/',
    },
    zeek: null,
  },
];